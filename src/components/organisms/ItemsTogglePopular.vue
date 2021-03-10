<template>
  <div class="items-toggle-popular">
    <TitleEl 
      class="items-toggle-popular__title" 
      :level="2"
    >
      {{ title }}
    </TitleEl>
    <ItemsToggle 
      :toggle-labels="['Tv', 'Movie']"
      :toggle-values="['tv', 'movie']"
      @toggle="toggle"
    >
      <ItemsPopular :media-type="mediaType" list-type="popular" template-type="slider"></ItemsPopular>
    </ItemsToggle>
  </div>
</template>

<script>
import TitleEl from '@components/atoms/TitleEl.vue';
import ItemsToggle from '@components/templates/ItemsToggle.vue';
import ItemsPopular from 'src/components/templates/Items.vue';

export default {
  name: "ItemsTogglePopular",

  components: {
    TitleEl,
    ItemsToggle,
    ItemsPopular
  },

  props: {
    title: {
      type: String,
      default: ""
    },
    toggleLabels: {
      type: Array,
      default: () => ["tv", "movies"],
    },
    invert: {
      default: false
    },
  },

  data() {
    return {
      mediaType: 'tv'
    }
  },

  methods: {
    toggle(value) {
      this.mediaType = value;
    },
  },
};
</script>

<style scoped lang="scss">
.scroller-wrapper {
  position: relative;
}

.scroller-wrapper__container {
  padding-top: 30px;
}

.scroller-header {
  display: flex;
}

.scroller-header__title {
  margin-right: 20px;
}

.scroller {
  padding-top: 20px;
  overflow-x: scroll;
}

.scroller--fade-enter-to {
  opacity: 1;
  transition: opacity 2s;
}

.scroller--fade-enter,
.scroller--fade-leave-to {
  opacity: 0;
}
</style>
