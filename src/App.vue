<template>
  <div id="app">
    <h1>App icon creator</h1>

    <div class="wrapper">

     

      <canvas class="output" ref="canvas" />

      <div style="grid-area: main;">
        <ImageInput v-model="main.file" />
      </div>

      <div v-for="(image, index) in corners" :key="index" :class="image.label" :style="{ 'grid-area': image.label}">
        <!-- <input type="file" @change="imageChanged(image, $event)" accept="image/*" > -->
        <ImageInput v-model="image.file"/>
      </div>

    </div>

    <div style="grid-area: button;">
      <button @click="draw_icon()">Draw</button>
    </div>

  





  </div>
</template>

<script>

// import AppIcon from '@/components/AppIcon.vue'
import ImageInput from '@/components/ImageInput.vue'

export default {
  name: 'App',
  components: {
    ImageInput
  },
  data(){
    return {
      image: null,

      main: {
        label: 'main',
        file: null,
      },

      corners: [

        {
          label: 'top-left',
          file: null,
          drawBackground: true,
        },
        {
          label: 'top-right',
          file: null,
          drawBackground: true,
        },
        {
          label: 'bottom-left',
          file: null,
          drawBackground: true,
        },
        {
          label: 'bottom-right',
          file: null,
          drawBackground: true,
        },
      ],

      context: null,
      canvas: null,

    }
  },
  mounted() {
    this.get_canvas_and_context()
  },
  methods: {
    get_canvas_and_context() {
      this.canvas = this.$refs.canvas
      this.context = this.canvas.getContext('2d')
    },

    async draw_icon(){
      this.clear_canvas()
      await this.draw_main_image()
      this.corners.forEach( corner => { this.draw_corner(corner) })


    },

    loadImage(image){
      return new Promise ((resolve) => {
        const img = new Image()
        img.src = URL.createObjectURL(image)

        img.addEventListener('load', () => {
          resolve(img)
        }, false)
      })
    },
    wait(delay){
      return new Promise((resolve) => {
        setTimeout(resolve, delay)
      })
    },
    clear_canvas(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    },
    async draw_main_image() {
      const image = this.main.file
      if(!image) return

      const img = await this.loadImage(image)

      const img_min_dims = Math.max(img.width, img.height)

      // Canvas must be square
      this.canvas.width = img_min_dims
      this.canvas.height = img_min_dims

      // Center image in canvas
      const imgTopLeftCorner = {
        x: 0.5 * this.canvas.width - 0.5 * img.width,
        y: 0.5 * this.canvas.height - 0.5 * img.height,
      }

      this.context.drawImage(img, imgTopLeftCorner.x, imgTopLeftCorner.y)

    },


    async draw_corner(corner) {
      
      const {file, label} = corner

      if (!file) return

      console.log(`Corner ${label} has image`)
      

      const img = await this.loadImage(file)


      //canvas width and height should be the same
      const { width: canvasWidth, height: canvasHeight } = this.canvas


      // TODO: Preserve aspect radio of original image
      // const img_min_dims = Math.max(img.width, img.height)

      
      const ratio = 0.2
      const inverse_ratio = 1 - ratio
      
      const radius = ratio * canvasWidth
      const imageMaxHeightOrWidth = 0.55 * 2 * radius
      
      let imageCenter

      if (label === 'top-left') imageCenter = { x: ratio * canvasWidth, y: ratio * canvasHeight }
      if (label === 'bottom-left') imageCenter = { x: ratio * canvasWidth, y: inverse_ratio * canvasHeight }
      if (label === 'top-right') imageCenter = { x: inverse_ratio * canvasWidth, y: ratio * canvasHeight }
      if (label === 'bottom-right') imageCenter = { x: inverse_ratio * canvasWidth, y: inverse_ratio * canvasHeight }

      const imageCorner = { x: imageCenter.x - 0.5 * imageMaxHeightOrWidth, y: imageCenter.y - 0.5 * imageMaxHeightOrWidth }

      // Draw a white background around image
      if (corner.drawBackground) {
        this.context.beginPath()
        this.context.arc(imageCenter.x, imageCenter.y, radius, radius, 0, 2 * Math.PI, false)
        this.context.fillStyle = 'white'
        this.context.fill()

      }

      // Draw the image
      this.context.drawImage(img, imageCorner.x, imageCorner.y, imageMaxHeightOrWidth, imageMaxHeightOrWidth)


    }
  }

}
</script>

<style>
.wrapper {
  display: grid;
  grid-template-areas: 
    ' top-left . top-right'
    '. output .'
    '. main .'
    'bottom-left button bottom-right';
}


.output {
  grid-area: output;
  outline: 1px solid red;
}

</style>
