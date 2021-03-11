<template>
  <page>
    <row>
      <container>
        <ItemsToggle 
          title="What's popular" 
          template-type="slider"
          :config="popularItemsConfig"
        />
      </container>
    </row>
    <row>
      <container>
      </container>
    </row>
  </page>
</template>

<script>
import Page from "@components/templates/Page.vue";
import Row from "@components/templates/Row.vue";
import Container from '@components/templates/Container.vue';
import ItemsToggle from '@components/templates/ItemsToggle.vue';

export default {
  name: "PageHome",

  components: { 
    Page, 
    Row,
    Container,
    ItemsToggle,
  },

  data() {
    return {
      popularItemsConfig: [
        {
          label: 'Series',
          value: 'tv',
          list: 'popular'
        },
        {
          label: 'Movies',
          value: 'movie',
          list: 'now_playing'
        },
        {
          label: 'Person',
          value: 'person',
          list: 'popular'
        }
      ]
    }
  },
};
</script>

<style scoped>
</style>

