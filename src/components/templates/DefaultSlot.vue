<template>
  <p>This is default content of {{ this.$options.name }} component in {{ this.$parent.$options.name }} component.</p>
</template>

<script>
  export default {
    name: "DefaultSlot",
  }
</script>