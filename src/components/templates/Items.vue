<template>
  <div 
    class="items"
    :class="`items-${listType}`"
  >
    <slot :items="items">
      <List :items="items"></List>
    </slot>
  </div>
</template>

<script>
import { getItems } from '@utils/requests/getItems'
import Cache from '@utils/cache';
import List from '@components/molecules/List.vue';

export default {
  name: "Items",

  components: {
    List
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
