<template>
  <ul :class="`menu menu--lvl${depth}`">
    <menu-item
      v-for="(route, index) in routes"
      :key="index"
      :route="route"
      :depth="depth"
    >
    </menu-item>
  </ul>
</template>

<script>
import MenuItem from "@components/molecules/MenuItem.vue";

export default {
  name: "MenuList",

  components: {
    MenuItem,
  },

  props: {
    routes: {
      type: Array
    },
    depth: {
      type: Number,
      default: 1
    },
    depthLimit: {
      type: Number,
      default: 5
    }
  }
}
</script>

<style scoped lang="scss">
</style>
