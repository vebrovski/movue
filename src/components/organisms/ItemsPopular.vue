<template>
  <Items class="popular-items">
    <Title :level="2">{{ title }}</Title>
    <ItemsList v-if="templateType === 'list'" :items="items" class="popular-list"></ItemsList>
    <ItemsSlider v-if="templateType === 'slider'" :items="items" class="popular-slider"></ItemsSlider>
  </Items>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Items from '@components/templates/Items.vue'
import ItemsSlider from '@components/organisms/ItemsSlider.vue';
import TitleEl from '@components/atoms/TitleEl.vue';

export default {
  name: "ItemsPopular",

  components: {
    Items,
    ItemsSlider,
    TitleEl,
  },

  props: {
    title: {
      type: String,
      default: "What's Popular",
    },

    /**
     * Config for targeting medi type.
     * @value movie, tv, people
     */
    mediaType: {
      type: String,
      default: "movie", // @see getItems file for available values.
    },

    /**
     * Config for display of items.
     * @value list, slider, grid (to be added).
     */
    templateType: {
      type: String,
      default: 'list'
    }
  },

  data() {
    return {
      items: []
    }
  },

  mounted() {
    this.getItemsStore()
  },

  computed: {
    ...mapState([
      "moviesPopular",
      "tvPopular",
      "peoplePopular"
    ]),
  },

  watch: {
    moviesPopular() {
      if (this.moviesPopular.length > 0) {
        this.items = this.moviesPopular
      }
    },

    tvPopular() {
      if (this.tvPopular) {
        this.items = this.tvPopular
      }
    },

    peoplePopular() {
      if (this.peoplePopular) {
        this.items = this.peoplePopular
      }
    }
  },

  methods: {
    ...mapActions(["getItemsStore"]),

    getItemsStore() {
      this.$store.dispatch("getItemsStore", {
        mediaType: this.mediaType,
        listType: 'popular'
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
