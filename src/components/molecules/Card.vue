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
        <VoteScore
          v-if="score > 0"
          class="card__vote-score"
          :score="score"
          :score-size="5"
        ></VoteScore>
      </div>
    </div>
  </div>
</template>

<script>
import { imagePath } from "@utils/imagePath";
import Poster from "@components/molecules/Poster.vue";
import VoteScore from "@components/molecules/VoteScore.vue";
import TitleEl from "@components/atoms/TitleEl.vue";

export default {
  name: "Card",

  components: {
    TitleEl,
    VoteScore,
    Poster,
  },

  props: {
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

