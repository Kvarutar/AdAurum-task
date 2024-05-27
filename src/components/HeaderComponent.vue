<template>
  <header class="header">
    <div class="container header__wrapper">
      <img alt="logo" class="header__logo" src="../assets/icons/logo.svg" />

      <div class="header__content">
        <div class="header__items">
          <h3>Username@adaurum.ru</h3>
          <h5 class="header__payday">5% выручки</h5>
        </div>
        <div class="header__item">
          <div class="header__icon">
            <img src="../assets/icons/convert.svg" alt="convert" />
          </div>
          <h3>5%</h3>
        </div>
        <div class="header__item">
          <div class="header__icon">
            <img src="../assets/icons/user.svg" alt="user" />
          </div>
          <h3>Username@adaurum.ru</h3>
        </div>

        <div class="header__buttons">
          <button class="header__button">
            <img src="../assets/icons/settings.svg" alt="settings" />
          </button>
          <button class="header__button">
            <img src="../assets/icons/login.svg" alt="login" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding-top: 30px;
  margin-bottom: 30px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    gap: 26px;
  }
  &__items {
    display: none;
  }
  &__item {
    display: flex;
    align-items: center;
  }
  &__payday {
    margin-top: 4px;
  }
  &__icon {
    background-color: var(--primary);
    border-radius: 100%;
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    user-select: none;
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
    user-select: none;
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

@media (max-width: 888px) {
  .header {
    &__wrapper {
      flex-direction: column;
      align-items: baseline;
      gap: 20px;
    }
    &__logo {
      width: auto;
      height: 24px;
    }
    &__item {
      display: none;
    }
    &__items {
      display: block;
    }
    &__content {
      width: 100%;
      justify-content: space-between;
    }
  }
}
</style>
