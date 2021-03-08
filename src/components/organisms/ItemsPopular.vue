<template>
  <Items class="popular-items">
    <ItemsList v-if="templateType === 'list'" :items="items" class="popular-list"></ItemsList>
    <ItemsSlider v-if="templateType === 'slider'" :items="items" class="popular-slider"></ItemsSlider>
  </Items>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Items from '@components/templates/Items.vue'
import ItemsSlider from '@components/organisms/ItemsSlider.vue';

export default {
  name: "ItemsPopular",

  components: {
    Items,
    ItemsSlider
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
      default: "movie",
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
      if (this.mediaType === 'movie') {
        this.items = this.moviesPopular
      }
    },

    tvPopular() {
      if (this.mediaType === 'tv') {
        this.items = this.tvPopular
      }
    },

    peoplePopular() {
      if (this.mediaType === 'people') {
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
