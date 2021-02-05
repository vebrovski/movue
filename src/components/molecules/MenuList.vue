<template>
  <ul
    :class="[
      'menu',
      `menu--lvl${depth}`,
      menuClass && depth === 1 ? `${menuClass}` : '',
      menuClass ? `${menuClass}--lvl${depth}` : '',
    ]"
  >
    <slot>
      <menu-item
        v-for="(route, index) in routes"
        :key="index"
        :menuClass="`${menuClass}`"
        :menuItemClass="`${menuClass}__item`"
        :menuItemExtraClasses="menuItemExtraClasses"
        :route="route"
        :depth="depth"
        :showChildren="showChildren"
      >
      </menu-item>
    </slot>
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
      type: Array,
    },
    depth: {
      type: Number,
      default: 1,
    },
    showChildren: {
      type: Boolean,
      default: true,
    },
    menuClass: {
      type: String,
    },
    menuItemExtraClasses: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
</style>
