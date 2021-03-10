<template>
  <div class="toggle">
    <button-el
      v-for="(button, index) in values.length"
      :key="index"
      type="button"
      class="toggle__button"
      :class="{ 'toggle__button_is-active': index === isActive }"
      :text="labels[index]"
      @click.native="toggle(index, values[index])"
    />
  </div>
</template>

<script>
import ButtonEl from "@components/atoms/ButtonEl.vue";

export default {
  name: "Toggle",

  components: {
    ButtonEl,
  },

  props: {
    /**
     * Button labels.
     * Number of buttons are based on number of labels.
     */
    labels: {
      type: Array,
      default: () => ["On", "Off"],
    },

    values: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      isActive: 0,
    };
  },

  methods: {
    toggle(index, value) {
      this.isActive = index;
      this.$emit("toggle", {
        index: index,
        value: value
      });
    },
  },
};
</script>

<style scoped lang="scss">
.toggle {
  position: relative;
  display: inline-flex;
}

.toggle__button {
  &_is-active {
    border-color: $red-color;
  }
}
</style>
