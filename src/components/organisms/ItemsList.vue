<template>
  <List>
    <ListItem
      v-for="item in items"
      :key="item.id"
    >
      <Card
        :title="item.title"
        :image="item.poster_path || item.backdrop_path"
        :score="item.vote_average"
      />
    </ListItem>
  </List>
</template>

<script>
import List from "@components/molecules/List.vue";
import ListItem from "@components/molecules/ListItem.vue";
import Card from "@components/molecules/Card.vue";

export default {
  name: "ItemsList",

  components: { List, ListItem, Card },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
