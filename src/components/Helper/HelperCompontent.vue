<script setup>
import { ref } from 'vue'
import ChatComponent from './ChatComponent.vue'
import HelperPopup from './HelperPopup.vue'

const isPopupVisible = ref(false)
</script>

<template>
  <section class="helper">
    <div class="helper__header">
      <h2 class="helper__title">Личный помощник</h2>
      <div class="helper__meta">
        <h4 class="helper__name">Jim Davidson</h4>
        <h4 class="helper__mail">JimDavidson@adaurum.ru</h4>
        <div class="helper__more" @click="() => (isPopupVisible = !isPopupVisible)">
          <HelperPopup v-if="isPopupVisible" />
          <img src="../../assets/icons/more.svg" alt="more" />
        </div>
      </div>
    </div>

    <div class="helper__header helper__header_mobile">
      <div class="helper__wrapper">
        <h2 class="helper__title">Личный помощник</h2>
        <div class="helper__more" @click="() => (isPopupVisible = !isPopupVisible)">
          <HelperPopup v-if="isPopupVisible" />
          <img src="../../assets/icons/more.svg" alt="more" />
        </div>
      </div>
      <div class="helper__meta">
        <h4 class="helper__name">Jim Davidson</h4>
        <h4 class="helper__mail">JimDavidson@adaurum.ru</h4>
      </div>
    </div>

    <div class="helper__content">
      <ChatComponent />
    </div>
  </section>
</template>

<style lang="scss">
.helper {
  height: 100%;
  background-color: var(--background);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &_mobile {
      display: none;
    }
  }
  &__meta {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__name {
    font-weight: 600;
  }
  &__mail {
    color: var(--text-secondary);
  }
  &__more {
    display: flex;
    padding: 8px;
    border-radius: 100%;
    cursor: pointer;
    background-color: var(--neutral);
    margin-left: 16px;
    user-select: none;
    max-width: 40px;
    max-height: 40px;
    position: relative;
    z-index: 1;
  }
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
}

@media (max-width: 888px) {
  .helper {
    &__header {
      display: none;
      &_mobile {
        display: block;
      }
    }
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }
}
</style>
