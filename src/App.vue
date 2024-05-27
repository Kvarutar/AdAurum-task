<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import FilesComponent from './components/Files/FilesComponent.vue'
import HelperCompontent from './components/Helper/HelperCompontent.vue'
</script>

<template>
  <HeaderComponent />
  <main class="main">
    <div class="container main__wrapper">
      <FilesComponent />
      <HelperCompontent />
    </div>
  </main>
  <FooterComponent />
</template>

<style scoped lang="scss">
.main {
  flex: 1;
  overflow: hidden;
  &__wrapper {
    display: grid;
    grid-template-columns: 3fr 9fr;
    column-gap: 30px;
    height: 100%;
  }
}

@media (max-width: 1152px) {
  .main {
    &__wrapper {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
  }
}
</style>
