<template>
  <menu-list
    class="flex flex-row"
    menuClass="main-menu"
    :routes="mainMenuRoutes"
  ></menu-list>
</template>

<script>
import mainMenuRoutes from "@router/mainMenuRoutes";
import MenuList from "@components/molecules/MenuList.vue";

export default {
  name: "MainMenu",
  components: { MenuList },

  data() {
    return {
      mainMenuRoutes,
    };
  },
};
</script>

<style scoped>
</style>
