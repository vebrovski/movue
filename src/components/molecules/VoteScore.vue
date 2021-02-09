<template>
  <div class="vote-score" :style="style">
    {{ scorePercent || 'NR'}}
    <sup class="vote-score__percent-sign" v-if="score && score > 0" :style="stylePercent">%</sup>
    <canvas class="vote-score__border" ref="voteScoreCanvas" :width="scoreSize" :height="scoreSize"></canvas>
  </div>
</template>

<script>
  export default {
    name: "VoteScore",

    props: {
      score: '',
      scoreSize: {
        type: Number,
        default: 38
      }
    },

    mounted() {
      this.scoreCircle(this.scorePercent);
    },

    updated() {
      this.scoreCircle(this.scorePercent);
    },

    computed: {
      scorePercent() {
        return this.score * 10;
      },

      style() {
        return `width: ${this.scoreSize + 2}px; height: ${this.scoreSize + 2}px; font-size: ${this.scoreSize / 3}px`;
      },

      stylePercent() {
        return `font-size: ${this.scoreSize / 5}px`;
      }
    },

    methods: {
      scoreCircle(percent) {
        if (this.$refs.voteScoreCanvas) {
          const canvas = this.$refs.voteScoreCanvas;
          const arc = {
            x: this.scoreSize / 2,
            y: this.scoreSize / 2,
            radius: (this.scoreSize / 2) - (this.scoreSize / 15),
            startAngle: 0,
            endAngle: percent > 0 ? 2 * Math.PI * (percent / 100) : 2 * Math.PI,
            antiClockWise: false
          };
          const lineWidth = this.scoreSize / 15;
          const strokeStyle = this.circleColor(percent);

          if (canvas.getContext('2d')) {
            let ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(...Object.values(arc));
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = strokeStyle;
            ctx.stroke();

            let ctxDimmed = canvas.getContext('2d');
            ctxDimmed.beginPath();
            ctxDimmed.arc(arc.x, arc.y, arc.radius, arc.startAngle, 2 * Math.PI, arc.antiClockWise);
            ctxDimmed.lineWidth = lineWidth;
            ctxDimmed.globalAlpha = 0.3;
            ctxDimmed.strokeStyle = strokeStyle;
            ctxDimmed.stroke();
          }
        }
      },

      circleColor(percent) {
        if (percent == 0) {
          return '#555859';
        }
        if (percent >= 0 && percent <= 25) {
          return '#d0225d';
        }
        if (percent > 25 && percent <= 70) {
          return '#d2d531';
        }
        if (percent > 70) {
          return '#21d07a';
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .vote-score {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 50%;
    color: white;
  }

  .vote-score__border {
    position: absolute;
    transform: rotate(-90deg);
  }
</style>
