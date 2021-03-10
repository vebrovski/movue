<template>
  <div 
    class="vote-score"
    :class="`vote-score_${template}`" 
    :style="template === 'linear' ? linearStyle : radialStyle"
  >
    {{ scorePercent }}
    <sup class="vote-score__percent-sign">
      % 
    </sup>
    
    <div 
      v-if="template === 'linear'"
      :class="`vote-score_${template}__border`"
    >
      <span 
        :class="[
          `vote-score_${template}__line`,
          lineColor
        ]"
        :style="lineStyle"
      ></span>
    </div>

    <canvas
      v-if="template === 'radial'"
      ref="voteScoreCanvas"
      :class="`vote-score_${template}__border`"
      :width="scoreSize"
      :height="scoreSize"
    />
  </div>
</template>

<script>
/**
 * There is also a vue-radial-progress package for this kind of thing.
 */
export default {
  name: "VoteScore",

  props: {
    score: {
      type: Number,
      default: 0,
    },
    scoreSize: {
      type: Number,
      default: 38,
    },
    /**
     * @value linear, radial
     */
    template: {
      type: String,
      default: 'linear'
    }
  },

  computed: {
    scorePercent() {
      return this.score * 10;
    },

    linearStyle() {
      return `font-size: ${this.scoreSize * 5}px;`;
    },

    lineStyle() {
      return `width: ${this.scorePercent}%;`;
    },

    lineColor() {
      return this.setLineColor(this.scorePercent);
    },

    radialStyle() {
      return `
        width: ${this.scoreSize + 2}px; 
        height: ${this.scoreSize + 2}px; 
        font-size: ${this.scoreSize / 3}px;
      `;
    },
  },

  mounted() {
    this.scoreCircle(this.scorePercent);
  },

  updated() {
    this.scoreCircle(this.scorePercent);
  },

  methods: {
    setLineColor(percent) {
      if (percent == 0) {
        return "#555859";
      }
      if (percent >= 0 && percent <= 25) {
        return "vote-score_linear__line_red";
      }
      if (percent > 25 && percent <= 70) {
        return "vote-score_linear__line_yellow";
      }
      if (percent > 70) {
        return "vote-score_linear__line_green";
      }
    },

    scoreCircle(percent) {
      if (this.$refs.voteScoreCanvas) {
        const canvas = this.$refs.voteScoreCanvas;
        const arc = {
          x: this.scoreSize / 2,
          y: this.scoreSize / 2,
          radius: this.scoreSize / 2 - this.scoreSize / 15,
          startAngle: 0,
          endAngle: percent > 0 ? 2 * Math.PI * (percent / 100) : 2 * Math.PI,
          antiClockWise: false,
        };
        const lineWidth = this.scoreSize / 15;
        const strokeStyle = this.circleColor(percent);

        if (canvas.getContext("2d")) {
          let ctx = canvas.getContext("2d");
          ctx.beginPath();
          ctx.arc(...Object.values(arc));
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = strokeStyle;
          ctx.stroke();

          let ctxDimmed = canvas.getContext("2d");
          ctxDimmed.beginPath();
          ctxDimmed.arc(
            arc.x,
            arc.y,
            arc.radius,
            arc.startAngle,
            2 * Math.PI,
            arc.antiClockWise
          );
          ctxDimmed.lineWidth = lineWidth;
          ctxDimmed.globalAlpha = 0.3;
          ctxDimmed.strokeStyle = strokeStyle;
          ctxDimmed.stroke();
        }
      }
    },

    circleColor(percent) {
      if (percent == 0) {
        return "#555859";
      }
      if (percent >= 0 && percent <= 25) {
        return "#d0225d";
      }
      if (percent > 25 && percent <= 70) {
        return "#d2d531";
      }
      if (percent > 70) {
        return "#21d07a";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.vote-score_radial {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  border-radius: 50%;
  color: white;
}

.vote-score_radial__border {
  position: absolute;
  transform: rotate(-90deg);
}

.vote-score_linear {
  position: relative;
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: left;
  color: white;
}

.vote-score__percent-sign {
  font-size: 50%;
}

.vote-score_linear__border {
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: var(--borderColor);
}

.vote-score_linear__line {
  display: block;
  height: inherit;
}

.vote-score_linear__line_red {
  background-color: var(--redColor);
}

.vote-score_linear__line_yellow {
  background-color: var(--yellowColor);
}

.vote-score_linear__line_green {
  background-color: var(--greenColor);
}
</style>
