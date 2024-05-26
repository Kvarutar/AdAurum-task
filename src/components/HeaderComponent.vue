<script setup></script>

<template>
  <header class="header">
    <div class="container header__wrapper">
      <img alt="logo" class="header__logo" src="./icons/logo.svg" />
      <div class="header__content">
        <div class="header__item">
          <div class="header__icon">
            <img src="./icons/convert.svg" alt="convert" />
          </div>
          <h3>5%</h3>
        </div>
        <div class="header__item">
          <div class="header__icon">
            <img src="./icons/user.svg" alt="user" />
          </div>
          <h3>Username@adaurum.ru</h3>
        </div>
        <div class="header__buttons">
          <button class="header__button"><img src="./icons/settings.svg" alt="settings" /></button>
          <button class="header__button"><img src="./icons/login.svg" alt="login" /></button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding-top: 30px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    gap: 26px;
  }
  &__item {
    display: flex;
    align-items: center;
  }
  &__icon {
    background-color: var(--primary);
    border-radius: 100%;
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 54px;
    }
  }
  &__buttons {
    display: flex;
    gap: 12px;
  }
  &__button {
    border-radius: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #ffffff;
  }
}
</style>
