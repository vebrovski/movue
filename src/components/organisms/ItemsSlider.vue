<template>
  <div 
    v-swiper:ItemListSwiper="{ swiperOption }" 
    class="slider"
  >
    <List 
      class="slider__items" 
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
            :title="item.title"
            :image="item.poster_path || item.backdrop_path"
            :score="item.vote_average"
          />
        </slot>
      </ListItem>
    </List>
    <div 
      :class="{ 'swiper-button-next': enableDefaultSlider }" 
      class="button-next"
    ></div>
    <div 
      :class="{ 'swiper-button-prev': enableDefaultSlider }" 
      class="button-prev"
    ></div>
  </div>
</template>

<script>
import List from "@components/molecules/List.vue";
import ListItem from "@components/molecules/ListItem.vue";
import Card from "@components/molecules/Card.vue";

export default {
  /**
   * Usage
   * Mind there is already default content for slot added with Card component.
   * In parent template do something like (scoped props solution):
   *
   * <Slider :items="items" v-slot="{ item }">
   *   <Card :item="item"
   *         :image="item.profile_path"
   *         :score="item.vote_average"
   *         :title="item.name || item.original_name"
   *         :description="item.character"
   *   ></Card>
   * </Slider>
   *
   * Or if you want to add specific classes for items and item
   *
   * <Slider :items="items" v-slot="{ item }">
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
   * </Slider>
   */
  name: "ItemsSlider",

  components: {
    ListItem,
    List,
    Card
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    enableDefaultSlider: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      swiperOption: {}
    }
  },

  watch: {
    items(value) {
      this.swiperOption = {
        spaceBetween: 30,
        slidesPerView: 7,
        loop: true,
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 50,
          }
        }
      }
    }
  } 
}
</script>

<style scoped lang="scss">
</style>
