<template>
  <button 
    :type="type" 
    class="button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonEl",

  props: {
    type: {
      type: String,
      default: "submit",
    },
    text: {
      type: String,
      default: "Submit",
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  position: relative;
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  border: 2px solid  $border-color;
  margin-right: 1rem;
  background-color: transparent;
  border-radius: $border-radius;
  color: white;
  font-size: 1.6rem;
  font-weight: $font-weight-semi-bold;

  &:hover,
  &:active {
    border-color: $red-color;
    cursor: pointer;
  }
}
</style>
