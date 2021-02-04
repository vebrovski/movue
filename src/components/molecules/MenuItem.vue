<template>
  <li
    :class="[
      `menu__item menu__item--lvl${depth}`,
      menuItemClass ? `${menuItemClass}` : '',
      menuItemClass ? `${menuItemClass}--lvl${depth}` : '',
    ]"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    <!-- We are relying here on path, which is not ok. for now it works because child paths in routing are hardcoded like '/movies/top-rated'. First level path should be added dynamically. -->
    <menu-link
      :label="route.meta.label"
      :url="route.path"
      :menuLinkClass="menuItemClass"
      :depth="depth"
    >
    </menu-link>

    <!-- menu-list is registered globally -->
    <menu-list
      :class="['menu__children', menuClass ? `${menuClass}__children` : '']"
      :menuClass="menuClass"
      :routes="route.children"
      :depth="depth + 1"
      v-if="route.children && showChildren && depth > 0"
      v-show="active"
    ></menu-list>
  </li>
</template>

<script>
import MenuLink from "@components/atoms/MenuLink.vue";

export default {
  components: { MenuLink },
  name: "MenuItem",

  props: {
    route: {
      type: Object,
    },
    depth: {
      type: Number,
    },
    showChildren: {
      type: Boolean,
    },
    menuClass: {
      type: String,
    },
    menuItemClass: {
      type: String,
    },
  },

  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
