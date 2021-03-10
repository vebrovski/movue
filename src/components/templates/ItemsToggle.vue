<template>
  <div class="items-toggle">
    <div class="items-toggle__header">
      <TitleEl :level="2">
        {{ title }}
      </TitleEl>
      <Toggle
        :labels="toggleLabels"
        :values="toggleValues"
        @toggle="toggle"
      ></Toggle>
    </div>
    <div class="items-toggle__content">
      <slot>
        <Items
          :media-type="mediaType || defaultMediaType" 
          :list-type="listType" 
          :template-type="templateType"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import TitleEl from '@components/atoms/TitleEl.vue';
import Toggle from "@components/molecules/Toggle.vue";
import Items from '@components/templates/Items.vue';

export default {
  name: "ItemsToggle",

  components: {
    TitleEl,
    Toggle,
    Items
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    defaultMediaType: {
      type: String,
      default: 'tv'
    },
    listType: {
      type: String,
      default: 'popular'
    },
    templateType: {
      type: String,
      default: 'list'
    },
    toggleLabels: {
      type: Array,
      default: () => ['Label 1', 'Label 2'],
    },
    toggleValues: {
      type: Array,
      default: () => ['Value 1', 'Value 2'],
    },
  },

  data() {
    return {
      mediaType: this.defaultMediaType
    }
  },

  methods: {
    toggle(value) {
      this.mediaType = value;
    }
  },
};
</script>

<style scoped lang="scss">
</style>
