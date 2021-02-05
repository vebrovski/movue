<template>
  <li
    :class="[
      `menu__item menu__item--lvl${depth}`,
      menuItemClass ? `${menuItemClass}` : '',
      menuItemClass ? `${menuItemClass}--lvl${depth}` : '',
      menuItemExtraClasses ? `${menuItemExtraClasses}` : '',
    ]"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    <!-- We are relying here on path, which is not ok. for now it works because child paths in routing are hardcoded like '/movies/top-rated'. First level path should be added dynamically. -->
    <link-el
      :class="[
        `menu__link menu__link--lvl${depth}`,
        menuItemClass ? `${menuItemClass}__link` : '',
        menuItemClass ? `${menuItemClass}__link--lvl${depth}` : '',
      ]"
      :label="route.meta.label"
      :url="route.path"
      :menuLinkClass="menuItemClass"
      :depth="depth"
    >
    </link-el>

    <!-- menu-list is registered globally -->
    <menu-list
      :class="['menu__children', menuClass ? `${menuClass}__children` : '']"
      :menuClass="menuClass"
      :menuItemExtraClasses="menuItemExtraClasses"
      :routes="route.children"
      :depth="depth + 1"
      v-if="route.children && showChildren && depth > 0"
      v-show="active"
    ></menu-list>
  </li>
</template>

<script>
import LinkEl from "@components/atoms/LinkEl.vue";

export default {
  components: { LinkEl },
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
    menuItemExtraClasses: {
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
