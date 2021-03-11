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
          v-slot="{ items }"
          :media-type="mediaType || defaultMediaType" 
          :list-type="toggleListTypes"
        >
          <ItemsList 
            v-if="templateType === 'list'" 
            :items="items" 
            :class="`list-${toggleListTypes}`"
          />
          <ItemsSlider 
            v-if="templateType === 'slider'" 
            :items="items" 
            :class="`slider-${toggleListTypes}`"
          />
        </Items>
      </slot>
    </div>
  </div>
</template>

<script>
import TitleEl from "@components/atoms/TitleEl.vue";
import Toggle from "@components/molecules/Toggle.vue";
import Items from "@components/templates/Items.vue";
import ItemsList from "@components/organisms/ItemsList.vue";
import ItemsSlider from "@components/organisms/ItemsSlider.vue";

export default {
  name: "ItemsToggle",

  components: {
    TitleEl,
    Toggle,
    Items,
    ItemsList,
    ItemsSlider
  },

  props: {
    title: {
      type: String,
      default: "",
    },
    defaultMediaType: {
      type: String,
      default: "tv",
    },
    templateType: {
      type: String,
      default: "list",
    },
    config: {
      type: Array,
      default: () => [
        {
          label: "Label 1",
          value: "Value 1",
          list: "popular",
        },
        {
          label: "Label 2",
          value: "Value 2",
          list: "popular",
        },
      ],
    },
  },

  data() {
    return {
      index: 0,
      mediaType: this.defaultMediaType,
    };
  },

  computed: {
    toggleLabels() {
      return this.config.map((item) => item.label);
    },

    toggleValues() {
      return this.config.map((item) => item.value);
    },

    toggleListTypes() {
      return this.config[this.index].list;
    },
  },

  methods: {
    toggle(item) {
      this.index = item.index;
      this.mediaType = item.value;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
