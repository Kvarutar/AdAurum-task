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
      <div class="footer__logo">
        <img src="../assets/icons/logo_footer.svg" alt="logo" />
      </div>
      <a href="/" class="footer__link"><h4>Политика конфедиальности</h4></a>
      <a href="mailto:pinkchicken@adaurum.ru" class="footer__link"
        ><img src="../assets/icons/mail.svg" alt="e-mail" />
        <h4>pinkchicken@adaurum.ru</h4></a
      >
      <div class="footer__languages">
        <img src="../assets/icons/global.svg" alt="languages" />
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
      <div class="footer__socials">
        <a href="https://telegram.me/groupname" target="_blank"
          ><img src="../assets/icons/telegram.svg" alt="Telegram"
        /></a>
        <a href="https://wa.me/79200000000" target="_blank"
          ><img src="../assets/icons/whatsup.svg" alt="WhatsUp"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: var(--neutral-secondary);
  padding: 30px 0;
  &__logo {
    width: 40%;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  &__content {
    display: flex;
    gap: 65px;
    flex-wrap: wrap;
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
  &__socials {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
