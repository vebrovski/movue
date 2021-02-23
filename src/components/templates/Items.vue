<template>
  <div class="items">
    <slot>
      <DefaultSlot></DefaultSlot>
    </slot>
  </div>
</template>

<script>
import DefaultSlot from "@components/templates/DefaultSlot.vue";
export default {
  name: "Items",
  components: { DefaultSlot },
};
</script>

<style scoped lang="scss">
</style>
