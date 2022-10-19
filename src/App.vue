<template>
  <div id="app">
    <h1>App icon creator</h1>

    <div class="wrapper">

     

      <canvas class="output" ref="canvas" />

      <div v-for="(image, index) in images" :key="index" :class="image.label" :style="{ 'grid-area': image.label}">
        <input type="file" @change="imageChanged(index, $event)" accept="image/*" >
      </div>
    </div>

    

    <div
      class="images_wrapper"
      v-if="image">

      <canvas ref="canvas" />

    </div>





  </div>
</template>

<script>

// import AppIcon from '@/components/AppIcon.vue'

export default {
  name: 'App',
  components: {
    // AppIcon
  },
  data(){
    return {
      image: null,

      images: [
        {
          label: 'main',
          file: null,
        },
        {
          label: 'top-left',
          file: null,
        },
        {
          label: 'top-right',
          file: null,
        },
        {
          label: 'bottom-left',
          file: null,
        },
        {
          label: 'bottom-right',
          file: null,
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
    imageChanged(index, event){
      setTimeout( () => {
        this.images[index].file = event.target.files[0]
        this.draw_icon()


      }, 10)

    },
    draw_icon(){
      this.draw_main_image()
      for (let i=1; i<=4; i++) {
        this.draw_corner(i)

      }
    },
    draw_main_image() {
      const image = this.images[0].file
      if(!image) return
      const img = new Image()
      img.src = URL.createObjectURL(image)

      img.addEventListener('load', () => {

        const img_min_dims = Math.max(img.width, img.height)

        // Canvas should be square
        this.canvas.width = img_min_dims
        this.canvas.height = img_min_dims

        // Center image in canvas
        const img_corner = {
          x: 0.5 * this.canvas.width - 0.5 * img.width,
          y: 0.5 * this.canvas.height - 0.5 * img.height,
        }

        this.context.drawImage(img, img_corner.x, img_corner.y)
      }, false)

    },
    draw_corner(index) {
      if(index === 0) return
      const image = this.images[index]
      if(!image) return

      const {file, label} = image


      if (!file) return
      const { width: canvasWidth, height: canvasHeight } = this.canvas


      // TODO: Preserve aspect radio of original image

      // const { width: imageOriginalWidth, height: imageOriginalHeight } = file


      let imageCenter



      const ratio = 0.2
      const inverse_ratio = 1 - ratio

      const radius = ratio * canvasWidth
      const imageWidth = 0.55 * 2 * radius


      if (label === 'top-left') imageCenter = { x: ratio * canvasWidth, y: ratio * canvasHeight }
      if (label === 'bottom-left') imageCenter = { x: ratio * canvasWidth, y: inverse_ratio * canvasHeight }
      if (label === 'top-right') imageCenter = { x: inverse_ratio * canvasWidth, y: ratio * canvasHeight }
      if (label === 'bottom-right') imageCenter = { x: inverse_ratio * canvasWidth, y: inverse_ratio * canvasHeight }

      const corner = { x: imageCenter.x - 0.5 * imageWidth, y: imageCenter.y - 0.5 * imageWidth }

      const img = new Image()
      img.src = URL.createObjectURL(file)
      img.addEventListener('load', () => {

        // Draw a white background around image
        this.context.arc(imageCenter.x, imageCenter.y, radius, radius, 0, 2 * Math.PI, false)
        this.context.fillStyle = 'white'
        this.context.fill()
        this.context.drawImage(img, corner.x, corner.y, imageWidth, imageWidth)

      }, false)


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
    'bottom-left . bottom-right';
}

.main {
  grid-area: main;
}

.output {
  grid-area: output;
  outline: 1px solid red;
}

</style>
