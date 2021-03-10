<template>
  <div 
    class="items"
    :class="`${listType}`"
  >
    <ItemsList 
      v-if="templateType === 'list'" 
      :items="items" 
      class="popular-list"
      :class="`${listType}-list`"
    />
    <ItemsSlider 
      v-if="templateType === 'slider'" 
      :items="items" 
      :class="`${listType}-slider`"
    />
  </div>
</template>

<script>
import { getItems } from '@utils/requests/getItems'
import Cache from '@utils/cache';
import ItemsSlider from '@components/organisms/ItemsSlider.vue';
import ItemsList from '@components/organisms/ItemsList.vue';

export default {
  name: "Items",

  components: {
    ItemsSlider,
    ItemsList
  },

  props: {
    /**
     * Config for targeting media type.
     * @value movie, tv, people
     */
    mediaType: {
      type: String,
      default: "tv",
    },

    /**
     * Config for targeting list type.
     * @value for movies - latest, now_playing, popular, top_rated, upcoming.
     * @value for tv - latest, airing_today, on_the_air, popular, top_rated.
     * @value for people - latest, popular.
     */
    listType: {
      type: String,
      default: 'popular'
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
      items: [],
      cache: new Cache(),
    }
  },

  watch: {
    mediaType() {
      this.getItemsLocal(this.mediaType, this.listType)
    }
  },

  mounted() {
    this.getItemsLocal(this.mediaType, this.listType)
  },

  destroyed() {
    this.cache.clear();
  },

  methods: {
    getItemsLocal(mediaType, listType) {
      if (this.cache.exists(mediaType)) {
        this.items = this.cache.getItem(mediaType);
      } else {
        getItems(mediaType, listType)
        .then(response => {
          this.items = response.data.results
          this.cache.setItem(mediaType, this.items);
        })
        .catch((reason) => {
          alert(reason);
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>
