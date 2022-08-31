<template>
  <div id="app">
    <h1>App icon creator</h1>

    <div class="">
      <input type="file" @change="image_changed($event)">
      <input type="checkbox" v-model="logo">
      <label for="">Draw logo</label>
    </div>

    <div
      class="images_wrapper"
      v-if="image">
      <AppIcon
        :image="image"
        v-for="(techno, index) in technos"
        :key="index"
        :techno="techno"
        :logo="logo"/>
    </div>





  </div>
</template>

<script>

import AppIcon from '@/components/AppIcon.vue'

export default {
  name: 'App',
  components: {
    AppIcon
  },
  data(){
    return {
      image: null,
      logo: false,
      technos: [
        require('@/assets/helm.png'),
        require('@/assets/vuetify.png'),
        require('@/assets/vue.png'),
        require('@/assets/pdf.png'),
        null,
      ],
    }
  },
  methods:{
    image_changed(event){
      this.image = null
      setTimeout( () => {
        this.image = event.target.files[0]
      }, 10)

    }
  }

}
</script>

<style>
.images_wrapper {

}

</style>
