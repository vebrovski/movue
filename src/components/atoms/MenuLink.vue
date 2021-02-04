<template>
  <router-link
    :to="{ path: url }"
    :class="[
      `menu__link menu__link--lvl${depth}`,
      menuLinkClass ? `${menuLinkClass}__link` : '',
      menuLinkClass ? `${menuLinkClass}__link--lvl${depth}` : '',
    ]"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: "MenuLink",

  props: {
    label: {
      required: true,
    },

    url: {
      required: true,
    },

    depth: {
      type: Number,
    },

    menuLinkClass: {
      type: String,
    },
  },

  methods: {
    click(value) {
      this.$emit("menu", value);
      this.$router.push(value);
    },
  },
};
</script>

<style scoped lang="scss">
</style>