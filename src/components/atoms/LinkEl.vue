<template>
  <router-link :to="{ path: url }">
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: "LinkEl",

  props: {
    label: {
      required: true,
    },

    url: {
      required: true,
    }
  }
};
</script>

<style scoped lang="scss">
</style>