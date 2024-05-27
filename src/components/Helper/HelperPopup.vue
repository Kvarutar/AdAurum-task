<template>
  <div class="popup">
    <p class="popup__link">Обратная связь о&nbsp;работе сервиса</p>
    <p>Сменить помощника</p>
  </div>
</template>

<style lang="scss">
.popup {
  position: absolute;
  background-color: var(--background);
  border-radius: 8px;
  padding: 16px 30px;
  z-index: 3;
  right: 3px;
  bottom: -76px;
  width: 317px;
  p {
    cursor: pointer;
    text-align: right;
  }
  &__link {
    color: var(--primary);
    transition: 0.3s all;
    &:hover {
      color: var(--link-hover);
    }
  }
}
</style>
