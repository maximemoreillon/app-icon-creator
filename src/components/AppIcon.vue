<template>
  <canvas ref="canvas"/>
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    image: File,
  },
  data(){
    return {
      context: null,
      canvas: null,
    }
  },
  mounted(){
    this.get_canvas_and_context()
    this.draw_base_image()

  },
  methods: {
    get_canvas_and_context() {
      this.canvas = this.$refs.canvas
      this.context  = this.canvas.getContext('2d')
    },
    draw_base_image(){
      const img = new Image()
      img.src = URL.createObjectURL(this.image)

      img.addEventListener('load', () => {

        const img_min_dims = Math.max(img.width,img.height)

        // Canvas should be square
        this.canvas.width = img_min_dims
        this.canvas.height = this.canvas.width

        const img_corner = {
          x: 0.5 * this.canvas.width - 0.5 * img.width,
          y:  0.5 * this.canvas.height - 0.5 * img.height,
        }

        this.context.drawImage(img, img_corner.x, img_corner.y)
        this.draw_techno()
        if(this.logo) this.draw_logo()

      }, false)
    },
    draw_techno(){

      const src = this.techno
      if(!src) return

      const {width, height} = this.canvas



      const ratio = 0.2
      const inverse_ratio = 1 - ratio
      const offset = 0 * width

      const radius = ratio * width
      const center = {
        x: ratio * width + offset,
        y: inverse_ratio * height - offset
      }

      const img_width = 0.55 * 2 * radius

      const corner = {x: center.x - 0.5 * img_width, y: center.y - 0.5 * img_width}

      const img = new Image()
      img.src = src
      img.addEventListener('load', () => {

        this.context.arc(center.x, center.y, radius, radius, 0, 2 * Math.PI, false)
        this.context.fillStyle = 'white'
        this.context.fill()

        this.context.drawImage(img, corner.x, corner.y, img_width, img_width)

      }, false)


    }
  }
}
</script>

<style scoped>
canvas {
  border: 1px solid #dddddd;
  margin: 1em;
}
</style>
