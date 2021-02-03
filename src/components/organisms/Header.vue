<template>
  <div id="header" class="items-center justify-between">
    <container class="header__container">
      <columns
        class="header__columns items-center justify-between"
        :count="2"
        customColumnClass="header__column"
      >
        <template v-slot:column-1>
          <columns class=" items-center" :count="2">
            <template v-slot:column-1>
              <images class="logo" :path="Logo" link="/" :width="154" :height="20"></images>
            </template>
            <template v-slot:column-2>
              <main-menu class="px-4"></main-menu>
            </template>
          </columns>
        </template>
        <template v-slot:column-2>
          <div class="icon-search1" @click="$emit('searchActivate')"></div>
          <columns>
          </columns>
        </template>
      </columns>
    </container>
  </div>
</template>

<script>
import Logo from "@images/movue-logo.svg";
import Columns from "@components/templates/Columns.vue";
import Container from "@components/templates/Container.vue";
import Images from "@components/atoms/Images.vue";
import MainMenu from "@components/organisms/MainMenu.vue";

export default {
  name: "AppHeader",
  components: { Container, Columns, Images, MainMenu },

  data() {
    return {
      Logo
    };
  },
}
</script>

<style scoped>
</style>
