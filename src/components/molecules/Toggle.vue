<template>
  <div 
    class="toggle" 
    :class="{ 'toggle_is-inverted': invert === true }"
  >
    <button-el
      type="button"
      class="toggle__button"
      :class="{'toggle__button_is-active' : isActive === true}"
      :text="toggleOnText"
      @click.native="toggleOn"
    />
    <button-el 
      type="button"
      class="toggle__button"
      :class="{'toggle__button_is-active' : isActive === false}"
      :text="toggleOffText"
      @click.native="toggleOff"
    />
  </div>
</template>

<script>
  import ButtonEl from "@components/atoms/ButtonEl.vue";

  export default {
    name: "Toggle",

    components: {
      ButtonEl
    },

    props: {
      toggleOnText: {
        default: 'On',
        type: String
      },

      toggleOffText: {
        default: 'Off',
        type: String
      },

      toggleId: {
        type: String,
        required: true
      },

      invert: {
        default: false
      }
    },

    data() {
      return {
        isActive: true
      }
    },

    methods: {
      toggleOn() {
        this.isActive = true;
        this.$emit('toggleOn', this.toggleId);
      },

      toggleOff() {
        this.isActive = false;
        this.$emit('toggleOff', this.toggleId);
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
