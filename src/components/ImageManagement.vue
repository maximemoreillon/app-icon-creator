<template>
  <v-card
    outlined
    :class="image.label"
    :style="{ 'grid-area': image.label }"
    class="imageWrapper"
  >
    <v-toolbar flat dense>
      <v-btn v-if="image.file" @click="clearInput()" icon class="clearButton">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-file-input v-else hide-input accept="image/*" v-model="imageFile" />
      <v-spacer />
      <v-btn
        icon
        @click="image.drawBackground = !image.drawBackground"
        :color="image.drawBackground ? '#c00000' : undefined"
      >
        <v-icon>mdi-arrange-send-backward</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider />

    <v-card-text class="imagePreviewWrapper">
      <img v-if="image.file" :src="imageurl" alt="" class="imagePreview" />
      <v-icon v-else size="48">mdi-image-off</v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ImageManagement",
  props: {
    value: undefined,
  },
  components: {},
  data() {
    return {
      imageFile: null,
    }
  },
  watch: {
    imageFile() {
      this.image.file = this.imageFile
    },
  },
  methods: {
    clearInput() {
      this.imageFile = null
      this.image.file = null
    },
  },
  computed: {
    image: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit("input", newVal)
      },
    },
    imageurl() {
      if (!this.image) return
      return URL.createObjectURL(this.image.file)
    },
  },
}
</script>

<style scoped>
.imagePreviewWrapper {
  grid-area: imagePreviewWrapper;
  display: flex;
  justify-content: center;
}
.imagePreview {
  grid-area: imagePreview;
  object-fit: contain;
  align-self: center;
  width: 100%;
  height: 100%;
}
</style>
