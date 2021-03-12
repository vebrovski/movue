<template>
  <div 
    class="slider" 
    :class="{ 'swiper-container': enableDefaultSlider }"
  >
    <List
      class="slider__items flex-row flex-nowrap"
      :class="{ 'swiper-wrapper': enableDefaultSlider }"
    >
      <ListItem
        v-for="item in items"
        :key="item.id"
        class="slider__item"
        :class="{ 'swiper-slide': enableDefaultSlider }"
      >
        <slot :item="item">
          <Card
            :title="item.title || item.name"
            :image="item.poster_path || item.backdrop_path || item.profile_path"
            :score="item.vote_average"
          />
        </slot>
      </ListItem>
    </List>
    <div
      :class="{ 'swiper-button-next': enableDefaultSlider }"
      class="slider__button_next"
    ></div>
    <div
      :class="{ 'swiper-button-prev': enableDefaultSlider }"
      class="slider__button_prev"
    ></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css"; // (>= Swiper 6.x)

import List from "@components/molecules/List.vue";
import ListItem from "@components/molecules/ListItem.vue";
import Card from "@components/molecules/Card.vue";

export default {
  /**
   * Usage (with slots)
   * Mind there is already default content for slot added with Card component.
   * In parent template do something like (scoped props solution):
   *
   * <ItemsSlider :items="items" v-slot="{ item }">
   *   <Card :item="item"
   *         :image="item.profile_path"
   *         :score="item.vote_average"
   *         :title="item.name || item.original_name"
   *         :description="item.character"
   *   ></Card>
   * </ItemsSlider>
   *
   * Or if you want to add specific classes for items and item
   *
   * <ItemsSlider :items="items" v-slot="{ item }">
   *   <List>
   *     <ListItems class="scroller__item">
   *       <Card :item="item"
   *             :image="item.profile_path"
   *             :score="item.vote_average"
   *             :title="item.name || item.original_name"
   *             :description="item.character"
   *       ></Card>
   *     </ListItems>
   *   </List>
   * </ItemsSlider>
   */
  name: "ItemsSlider",

  components: {
    ListItem,
    List,
    Card,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    enableDefaultSlider: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      slider: null,
    }
  },

  watch: {
    items: {
      handler(value) {
        if (value.length > 0) {
          this.sliderInit();
        }
      },
    },
  },

  methods: {
    sliderInit() {
      this.slider = new Swiper(".swiper-container", {
        spaceBetween: 10,
        slidesPerView: 7,
        slidesPerGroup: 7,
        observer: true,
        observeParents: true,
        rebuildOnUpdate: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: false,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 7,
            slidesPerGroup: 7,
            spaceBetween: 10,
          },
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.slider__button {
  &_next,
  &_prev {
    color: $red-color;
    font-weight: $font-weight-bold;
  }
}
</style>
