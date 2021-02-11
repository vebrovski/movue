<template>
  <li class="list__item">
    <slot>
      {{ item }}
    </slot>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: ['item']
};
</script>
