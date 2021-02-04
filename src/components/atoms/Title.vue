<!-- No template because of render function -->

<script>
export default {
  name: "Title",

  props: {
    level: {
      type: Number,
      default: 1,
    },
  },

  render(createElement) {
    return createElement(
      "h" + this.level, // tag name
      this.$slots.default // array of children
    );
  },
};
</script>

<style scoped>
</style>