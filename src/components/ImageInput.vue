<template>
    <div class="imageInput">
        <img v-if="image" :src="imageurl" alt="">
        <input type="file" @change="fileChanged($event)" accept="image/*">

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
}

img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
}
</style>
