<template>
  <button 
    :type="type" 
    class="button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonEl",

  props: {
    type: {
      type: String,
      default: "submit",
    },
    text: {
      type: String,
      default: "Submit",
    },
  },
};
</script>

<style scoped lang="scss">
</style>
