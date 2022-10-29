<template>
    <div class="imageInput">
        <div class="previewWrapper" v-if="image">
            <img v-if="image" :src="imageurl" alt="">
            <button class="closeButton" @click="clearFile()">X</button>
        </div>
        <input v-else type="file" @change="fileChanged($event)" accept="image/*">

    </div>
</template>

<script>

export default {
    name: 'ImageInput',
    props: {
        value: undefined
    },
    data() {
        return {
        }
    },
    mounted() {
        

    },
    methods: {
        fileChanged(event) {
            this.image = event.target.files[0]
        },
        clearFile(){
            this.image = null
        }
    },
    computed: {
        image: {
            get(){ return this.value },
            set(newVal){ this.$emit('input', newVal)}
        },
        imageurl(){
            if(!this.image) return
            return URL.createObjectURL(this.image)
        }
    }
}
</script>

<style scoped>
.imageInput {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.previewWrapper {
    position: relative;
}

.closeButton {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 5%;
    right: 5%;

    width: 2em;
    height: 2em;

    border-radius: 100%;
    border: none;
    cursor: pointer;



}

img {
    width: 10rem;
    height: 10rem;
    object-fit: contain;
}
</style>
