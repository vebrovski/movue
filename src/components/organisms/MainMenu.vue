<template>
  <menu-list class="main-menu flex flex-row" :routes="mainMenuRoutes"></menu-list>
</template>

<script>
import mainMenuRoutes from "@router/mainMenuRoutes"
import MenuList from "@components/molecules/MenuList.vue"

export default {
  name: "MainMenu",
  components: { MenuList },

  data () {
    return {
      mainMenuRoutes
    }
  }
}
</script>

<style scoped>

</style>
