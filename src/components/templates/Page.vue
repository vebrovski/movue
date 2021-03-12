<template>
  <div class="page">
    <app-header></app-header>
    <div id="main">
      <slot></slot>
    </div>
    <portal-target name="destination"></portal-target>
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
