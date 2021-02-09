<template>
  <div class="poster">
    <Images class="poster__image" :path="path"></Images>
    <slot></slot>
  </div>
</template>

<script>
  import Images from "@components/atoms/Images.vue";

  export default {
    name: "Poster",

    components: {
      Images
    },

    props: {
      path: {
        type: String,
        required: true
      },
      link: {
        type: String,
      },
      width: '',
      height: ''
    }
  }
</script>

<style scoped lang="scss">
</style>