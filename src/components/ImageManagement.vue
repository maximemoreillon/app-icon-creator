<template>
    <div :class="image.label" :style="{ 'grid-area': image.label }"
        class="imageWrapper">

        <div class="imagePreviewWrapper">
            <img v-if="image.file" :src="imageurl" alt="" class="imagePreview">
        </div>
        
        <input type="file" @change="fileChanged($event)" accept="image/*" ref="fileInput" class="fileInput">

        <button :disabled="!image.file" @click="clearInput()" class="clearButton">Clear</button>

        <div v-if="image.label !== 'main'" class="checkboxWrapper">
            <input type="checkbox" v-model="image.drawBackground">
            <label>Draw background</label>
        </div>
    
    </div>
</template>

<script>

export default {
    name: 'ImageManagement',
    props: {
        value: undefined
    },
    components: {
        
    },
    data() {
        return {
        }
    },
    mounted() {


    },
    methods: {
        fileChanged(event) {
            this.image.file = event.target.files[0]
        },
        clearInput() {
            this.$refs.fileInput.value = null
            this.image.file = null
        }
    },
    computed: {
        image: {
            get() { return this.value },
            set(newVal) { this.$emit('input', newVal) }
        },
        imageurl() {
            if (!this.image) return
            return URL.createObjectURL(this.image.file)
        }
    }
}
</script>

<style scoped>
.imageWrapper {
    border: 1px solid #dddddd;
    padding: 0.5em;
    display: grid;
    gap: 0.25em;
    grid-template-areas: 
        'fileInput clearButton'
        'checkboxWrapper checkboxWrapper'
        'imagePreviewWrapper imagePreviewWrapper';
    
    grid-template-rows: auto auto 1fr;
}

.fileInput {
    grid-area: fileInput;
}

.clearButton {
    grid-area: clearButton;
}

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

.checkboxWrapper {
    grid-area: checkboxWrapper;
    display: flex;
    align-items: baseline;
    gap: 0.25em;
}
</style>
