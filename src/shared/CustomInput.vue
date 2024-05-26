<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <input v-model.trim="value" />
</template>

<style lang="scss">
input {
  background-color: var(--background);
  border: 1px solid var(--neutral-secondary);
  border-radius: 20px;
  padding: 25px 20px 12px 20px;
  transition: 0.2s all;
  &:focus {
    border: 1px solid var(--primary);
  }
}
</style>
