<template>
  <div class="columns flex flex-row">
    <div class="column"
         v-for="(column, index) in count"
            :key="index"
            :class="[
              `column-${column}`,
              { customColumnClass : customColumnClass !== undefined && customColumnClass.length > 0 },
              { 'sidebar sidebar-left' : column === 1 && sidebar && sidebarPosition.includes('left') },
              { 'sidebar sidebar-right' : column === count && sidebar && sidebarPosition.includes('right') }
            ]"
    >
      <slot v-if="count > 1" :name="`column-${column}`"></slot>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script>
  /**
   * USAGE
   * In parent template do something like:
   *
   * FOR ONE COLUMN
   * <Columns>
   *   <div class="content"></div>
   * </Columns>
   *
   * FOR MULTI COLUMNS
   * <Columns :count="2">
   *   <template v-slot:column-1>
   *     <div class="sidebar"></div>
   *   </template>
   *   <template v-slot:column-2>
   *     <div class="content"></div>
   *   </template>
   * </Columns>
   */

  export default {
    name: "Columns",

    props: {
      count: {
        type: Number,
        default: 1
      },
      sidebar: {
        type: Boolean,
        default: false
      },
      sidebarPosition: {
        type: Array,
        default: () => {
          return ['left']
        },
      },
      customColumnClass: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .column:only-child {
    width: 100%;
  }
</style>
