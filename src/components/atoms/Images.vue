<template>
  <div class="image">
    <a v-if="link && link.length > 0" :href="link" class="image__link block">
      <picture>
        <img
          class="image__img"
          :src="path"
          :alt="alt"
          :width="width"
          :height="height"
        />
      </picture>
    </a>
    <picture v-else>
      <img
        class="image__img"
        :src="path"
        :alt="alt"
        :width="width"
        :height="height"
      />
    </picture>
  </div>
</template>

<script>
    export default {
        name: "Images",

        props: {
            path: {
                type: String,
                required: true,
            },
            link: {
                type: String,
            },
            alt: {
                type: String,
            },
            width: {
                type: Number,
            },
            height: {
                type: Number,
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>

<!-- Images Size options
"backdrop_sizes": [
  "w300",
  "w780",
  "w1280",
  "original"
],
"logo_sizes": [
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original"
],
"poster_sizes": [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"
],
"profile_sizes": [
  "w45",
  "w185",
  "h632",
  "original"
],
"still_sizes": [
  "w92",
  "w185",
  "w300",
  "original"
]
-->
