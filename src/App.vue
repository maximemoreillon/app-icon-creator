<template>
  <div id="app">

    <div class="wrapper">
      <div class="inputWrapper">
        <ImageManagement v-model="images[index]" v-for="(image, index) in images" :key="index" />
      </div>

      <div class="outputWrapper">
        <canvas class="output" ref="canvas" />
      </div>
    </div>

  </div>
</template>

<script>

import ImageManagement from '@/components/ImageManagement.vue'

export default {
  name: 'App',
  components: {
    ImageManagement
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
  watch: {
    images: {
      handler() {
        this.draw_icon()
      },
      deep: true,
    },
  },
  methods: {
    get_canvas_and_context() {
      this.canvas = this.$refs.canvas
      this.context = this.canvas.getContext('2d')
    },

    async draw_icon(){
      const [mainImage, ...corners] = this.images
      this.clear_canvas()
      await this.draw_main_image(mainImage)
      corners.forEach( corner => { this.draw_corner(corner) })


    },

    loadImage(image) {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = URL.createObjectURL(image)

        img.addEventListener('load', () => {
          resolve(img)
        }, false)
      })
    },

    clear_canvas(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    },
    async draw_main_image(mainImage) {
      const image = mainImage.file
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
      
      const img = await this.loadImage(file)

      const { width: canvasWidth, height: canvasHeight } = this.canvas

      
      const ratio = 0.2
      const inverse_ratio = 1 - ratio
      
      const radius = ratio * canvasWidth

      const imageMaxHeightOrWidth = 0.55 * 2 * radius
      const imageAspectRation = img.height / img.width 

      const imaginaryHeight = imageMaxHeightOrWidth * imageAspectRation
      const imaginaryWidth = imageMaxHeightOrWidth / imageAspectRation
      
      const imageWidth = Math.min(imaginaryWidth, imageMaxHeightOrWidth)
      const imageHeight = Math.min(imaginaryHeight, imageMaxHeightOrWidth)
      
      
      // Compute center of image
      let imageCenter
      if (label === 'top-left') imageCenter = { x: ratio * canvasWidth, y: ratio * canvasHeight }
      if (label === 'bottom-left') imageCenter = { x: ratio * canvasWidth, y: inverse_ratio * canvasHeight }
      if (label === 'top-right') imageCenter = { x: inverse_ratio * canvasWidth, y: ratio * canvasHeight }
      if (label === 'bottom-right') imageCenter = { x: inverse_ratio * canvasWidth, y: inverse_ratio * canvasHeight }

      const imageCorner = { x: imageCenter.x - 0.5 * imageWidth, y: imageCenter.y - 0.5 * imageHeight }

      // Draw a white background around image
      if (corner.drawBackground) {
        this.context.beginPath()
        this.context.arc(imageCenter.x, imageCenter.y, radius, radius, 0, 2 * Math.PI, false)
        this.context.fillStyle = 'white'
        this.context.fill()
      }

      // Draw the image
      this.context.drawImage(img, imageCorner.x, imageCorner.y, imageWidth, imageHeight)


    }
  }

}
</script>

<style>
.wrapper {
  display: grid;
  gap: 1em;
  grid-template-areas: 'inputWrapper outputWrapper';
  grid-template-columns: 1fr 1fr;
}

.inputWrapper {
  grid-area: inputWrapper;
  border: 1px solid #dddddd;
  padding: 1em;
  display: grid;
  gap: 1em;
  grid-template-areas: 
    ' top-left . top-right'
    '. main .'
    'bottom-left . bottom-right';
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  aspect-ratio: 1;
}



.outputWrapper {
  grid-area: outputWrapper;
}

.output {
  border: 1px solid #dddddd;
  aspect-ratio: 1;
  width: 100%;

}
</style>
