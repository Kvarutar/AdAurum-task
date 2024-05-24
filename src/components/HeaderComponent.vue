<script setup>
import CustomButton from '../shared/CustomButton.vue'

const load = () => {
  console.log('clicked')
}
</script>

<template>
  <header class="header">
    <div class="container header__wrapper">
      <img alt="logo" class="header__logo" src="./icons/logo.svg" />
      <div class="header__content">
        <div class="header__item">
          <img src="./icons/convert-icon.svg" alt="convert" />
          <h3>5%</h3>
        </div>
        <div class="header__item">
          <img src="./icons/user-icon.svg" alt="user" />
          <h3>Username@adaurum.ru</h3>
        </div>
        <CustomButton @click="load">sadasd</CustomButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding-top: 30px;
}
</style>
