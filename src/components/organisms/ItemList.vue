<template>
  <list>
    <list-item
      v-for="item in items" 
      :key="item.id"
    >
      <Card
        :title="item.title"
        :image="item.poster_path || item.backdrop_path"
        :score="item.vote_average"
      ></Card>
    </list-item>
  </list>
</template>

<script>
import List from '@components/molecules/List.vue';
import ListItem from '@components/molecules/ListItem.vue';
import Card from "@components/molecules/Card.vue";

export default {
  name: "ItemList",

  components: { List, ListItem, Card },

  props: {
    items: {
      type: Array,
      default: () => []
    },
  },
};
</script>
