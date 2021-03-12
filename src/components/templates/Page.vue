<template>
  <div class="page">
    <AppHeader></AppHeader>
    <div id="main">
      <slot></slot>
    </div>
    <PortalTarget name="modal"></PortalTarget>
  </div>
</template>

<script>
import AppHeader from "@components/organisms/Header.vue";

export default {
  name: "Page",
  components: { AppHeader }
};
</script>

<style scoped>
</style>
