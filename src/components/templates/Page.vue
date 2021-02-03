<template>
  <div class="page">
    <div id="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Page",
    components: { AppHeader }
  }
</script>

<style scoped>
</style>
