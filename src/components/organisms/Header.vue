<template>
  <div 
    id="header" 
    class="items-center justify-between"
  >
    <Container class="header__container">
      <Columns
        class="header__columns items-center justify-between"
        :count="2"
        custom-column-class="header__column"
      >
        <template #column-1>
          <Columns 
            class="items-center" 
            :count="2"
          >
            <template #column-1>
              <Images
                class="logo"
                :path="Logo"
                link="/"
                :width="154"
                :height="20"
              />
            </template>
            <template #column-2>
              <MainMenu class="px-4"></MainMenu>
            </template>
          </Columns>
        </template>
        <template #column-2>
          <div 
            class="icon-search1" 
            @click="$emit('searchActivate')"
          ></div>
          <Columns></Columns>
        </template>
      </Columns>
    </Container>
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
  components: { 
    Container,
    Columns,
    Images,
    MainMenu
  },

  data() {
    return {
      Logo,
    };
  },
};
</script>

<style scoped>
</style>
