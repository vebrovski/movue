<template>
  <div class="date" v-if="date && date.length > 0">
    {{ dateFormatted }}
  </div>
</template>

<script>
  import {dateFormat} from "@src/utils/dateFormat";

  export default {
    name: "Date",

    props: [
      'date',
      'format'
    ],

    computed: {
      dateFormatted() {
        return dateFormat(this.date, this.format);
      }
    },
  }
</script>