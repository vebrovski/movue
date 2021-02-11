<template>
  <div class="poster">
    <images 
      :path="path" 
      class="poster__image"
    />
    <slot></slot>
  </div>
</template>

<script>
import Images from "@components/atoms/Images.vue";

export default {
  name: "Poster",

  components: {
    Images,
  },

  props: {
    path: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
  },
};
</script>
