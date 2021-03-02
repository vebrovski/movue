<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
.app {
  max-width: $max-width;
  margin: 0 auto;
}
</style>
