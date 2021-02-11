<template>
  <ul class="list">
    <slot>
      <!-- Using index for key here because it is just a generic default content for slot. When using this component you handle item your own way. -->
      <list-item
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      ></list-item>
    </slot>
  </ul>
</template>

<script>
import ListItem from "@components/molecules/ListItem.vue";

export default {
  name: "List",
  components: { ListItem },
  props: ['items']
};
</script>
