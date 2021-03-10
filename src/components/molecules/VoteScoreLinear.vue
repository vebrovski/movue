<template>
  <div :class="`${classBase}`">
    {{ scorePercent }}
    <sup :class="`${classBase}__percent-sign`"> % </sup>
    <div :class="`${classBase}__border`">
      <span 
        :class="[
          `${classBase}__line`,
          lineColor
        ]"
        :style="lineStyle"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoteScoreLinear",

  props: {
    score: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      classBase: 'vote-score-linear'
    }
  },

  computed: {
    scorePercent() {
      return this.score * 10;
    },

    lineStyle() {
      return `
        width: ${this.scorePercent}%;
      `;
    },

    lineColor() {
      return this.setLineColor(this.scorePercent);
    },
  },

  methods: {
    setLineColor(percent) {
      if (percent == 0) {
        return "#555859";
      }
      if (percent >= 0 && percent <= 25) {
        return "vote-score-linear__line_red";
      }
      if (percent > 25 && percent <= 70) {
        return "vote-score-linear__line_yellow";
      }
      if (percent > 70) {
        return "vote-score-linear__line_green";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.vote-score-linear {
  position: relative;
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: left;
  color: white;
}

.vote-score-linear__percent-sign {
  font-size: 50%;
}

.vote-score-linear__border {
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: var(--borderColor);
}

.vote-score-linear__line {
  display: block;
  height: inherit;
}

.vote-score-linear__line_red {
  background-color: var(--redColor);
}

.vote-score-linear__line_yellow {
  background-color: var(--yellowColor);
}

.vote-score-linear__line_green {
  background-color: var(--greenColor);
}
</style>
