<template>
  <div class="card">
    <Poster class="card__poster" v-if="image" :path="posterPath"></Poster>
    <div class="card__content">
      <Title class="card__title" v-if="title" :level="2">
        {{ title }}
      </Title>
      <div class="card__details">
        <VoteScore
          class="card__vote-score"
          :score="score"
        ></VoteScore>
      </div>
    </div>
  </div>
</template>

<script>
import { imagePath } from "@utils/imagePath";
import Poster from "@components/molecules/Poster.vue";
import VoteScore from "@components/molecules/VoteScore.vue";
import Title from "@components/atoms/Title.vue";

export default {
  name: "Card",

  components: {
    Title,
    VoteScore,
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

    item: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
    },
    score: {
      type: Number,
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    imageSize: {
      type: String,
      default: "w220_and_h330_face",
    }
  },

  computed: {
    posterPath() {
      return imagePath(this.image, this.posterSize);
    },
  }
};
</script>

<style scoped lang="scss">
</style>