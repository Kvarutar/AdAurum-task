<script setup>
import { ref } from 'vue'

const languages = ['ru', 'en', 'tur']
const activeLanguage = ref('ru')

const onActiveLanguageChange = newLanguage => {
  activeLanguage.value = newLanguage
  console.log(activeLanguage.value)
}
</script>

<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <img src="./icons/logo_footer.svg" alt="logo" />
      <a href="/" class="footer__link"><h4>Политика конфедиальности</h4></a>
      <a href="mailto:pinkchicken@adaurum.ru" class="footer__link"
        ><img src="./icons/mail.svg" alt="e-mail" />
        <h4>pinkchicken@adaurum.ru</h4></a
      >
      <div class="footer__languages">
        <img src="./icons/global.svg" alt="languages" />
        <h4
          v-for="lng in languages"
          class="footer__language"
          :class="{ footer__language_active: lng === activeLanguage }"
          @click="lng !== activeLanguage ? onActiveLanguageChange(lng) : () => {}"
          :key="lng"
        >
          {{ lng }}
        </h4>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: var(--neutral-secondary);
  padding: 30px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__link {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  &__languages {
    display: flex;
    align-items: center;
    gap: 12px;
    user-select: none;
  }
  &__language {
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.3s all;
    &:hover {
      color: var(--link-hover);
    }
    &_active {
      color: var(--primary);
      &:hover {
        color: var(--primary);
      }
    }
  }
}
</style>
