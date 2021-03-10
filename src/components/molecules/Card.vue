<template>
  <div
    class="card"
    @mouseenter="showDetails = true"
    @mouseleave="showDetails = true"
  >
    <Poster 
      v-if="image" 
      :path="posterPath" 
      class="card__poster"
    />
    <div 
      v-if="showDetails === true"
      class="card__content"
    >
      <TitleEl 
        v-if="title" 
        class="card__title" 
        :level="3"
      >
        {{ title }}
      </TitleEl>
      <div class="card__details">
        <VoteScoreLinear
          v-if="score > 0"
          class="card__vote-score"
          :score="score"
        ></VoteScoreLinear>
      </div>
    </div>
  </div>
</template>

<script>
import { imagePath } from "@utils/imagePath";
import Poster from "@components/molecules/Poster.vue";
import VoteScoreLinear from "@components/molecules/VoteScoreLinear.vue";
import TitleEl from "@components/atoms/TitleEl.vue";

export default {
  name: "Card",

  components: {
    TitleEl,
    VoteScoreLinear,
    Poster,
  },

  props: {
    /**
     * @todo
     * When getting item from request and passing it's property (ex. title) to required prop as binded value in template (:title="item.title")
     * it's value is first undefined (waiting for response). That's why I needed to add default value to required prop.
     * I think this should be handled in some other way.
     *
     * Example (getItem is an export of requests/getItem.js):
     * getItem("movie", 464052).then((response) => {
     *   this.item = response.data;
     * });
     *
     * <div :title="item.title"></div> item.title is undefined here.
     */
    title: {
      type: String,
      required: true,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    imageSize: {
      type: String,
      default: "w220_and_h330_face",
    },
    score: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      showDetails: true,
    };
  },

  computed: {
    posterPath() {
      return imagePath(this.image, this.imageSize);
    },
  },
};
</script>

<style scoped lang="scss">
.card__content {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>

