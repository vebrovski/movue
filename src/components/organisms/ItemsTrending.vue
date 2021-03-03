<template>
  <Items class="trending-items">
    <TitleEl :level="2">{{ title }}</TitleEl>
    <ItemsList
      v-if="templateType === 'list'"
      :items="items"
      class="trending-list"
    ></ItemsList>
    <ItemsSlider
      v-if="templateType === 'slider'"
      :items="items"
      class="trending-slider"
    ></ItemsSlider>
  </Items>
</template>

<script>
import { getTrendingItems } from "@utils/requests/getItems";
import Items from "@components/templates/Items.vue";
import ItemsSlider from "@components/organisms/ItemsSlider.vue";
import TitleEl from "@components/atoms/TitleEl.vue";

export default {
  name: "ItemsTrending",

  components: {
    Items,
    ItemsSlider,
    TitleEl,
  },

  props: {
    title: {
      type: String,
      default: "Trending",
    },

    /**
     * Config for targeting media type.
     * @value all, movie, tv, people.
     */
    mediaType: {
      type: String,
      default: "movie",
    },

    /**
     * Config for targeting time window.
     * @value day, week.
     */
    timeWindow: {
      type: String,
      default: "week",
    },

    /**
     * Config for display of items.
     * @value list, slider, grid (to be added).
     */
    templateType: {
      type: String,
      default: "list",
    },
  },

  data() {
    return {
      items: [],
    };
  },

  mounted() {
    this.getItems(this.mediaType, this.timeWindow);
  },

  methods: {
    getItems(mediaType, timeWindow) {
      getTrendingItems(mediaType, timeWindow).then((response) => {
        this.items = response.data.results;
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
