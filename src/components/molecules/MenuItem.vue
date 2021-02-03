<template>
  <li
    :class="`menu__item menu__item--lvl${depth}`"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    <!-- We are relying here on path, which is not ok. for now it works because child paths in routing are hardcoded like '/movies/top-rated'. First level path should be added dynamically. -->
    <router-link
      :to="{ path: route.path }"
      tag="a"
      :class="[
        `menu__link menu__link--lvl${depth}`,
        depth > 1 ? 'menu__child-link' : '',
      ]"
    >
      {{ route.meta.label }}
    </router-link>
    <!-- menu-list is registered globally -->
    <menu-list :routes="route.children" :depth="depth - 1" v-if="route.children && showChildren" v-show="active" class="menu menu__children"></menu-list>
  </li>
</template>

<script>

export default {
  name: "MenuItem",

  props: {
    route: {
      type: Object
    },
    depth: {
      type: Number,
      default: 1
    },
    showChildren: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      active: false,
    }
  }
}
</script>

<style scoped lang="scss">
</style>
