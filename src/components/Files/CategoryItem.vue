<script setup>
import { ref } from 'vue'
import FileItem from './FileItem.vue'

const isOpen = ref(true)
</script>

<script>
export default {
  name: 'CategoryItem',
  props: {
    filesData: Array,
    title: String,
    isShownMore: Boolean,
  },
  methods: {
    showMore(event) {
      this.$emit('onShowMore', event)
    },
    showLess(event) {
      this.$emit('onShowLess', event)
    },
  },
}
</script>

<template>
  <div class="category">
    <div class="category__header" @click="() => (isOpen = !isOpen)">
      <h3 class="category__subtitle">{{ title }}</h3>
      <img
        src="../../assets/icons/arrow.svg"
        alt="arrow"
        class="category__arrow"
        :class="isOpen && 'category__arrow_active'"
      />
    </div>
    <div v-if="isOpen" class="category__content">
      <FileItem
        v-for="item in filesData"
        :title="item.title"
        :isLoaded="item.isLoaded"
        :key="item.id"
      />
      <h5 v-if="isShownMore" @click="showLess" class="category__more">Скрыть</h5>
      <h5 v-else @click="showMore" class="category__more">Показать еще</h5>
    </div>
  </div>
</template>

<style lang="scss">
.category {
  max-height: 100%;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
  }
  &__arrow {
    transform: rotate(180deg);
    transition: 0.2s all;
    &_active {
      transform: rotate(0deg);
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__more {
    text-align: right;
    margin-top: 12px;
    color: var(--primary);
    transition: 0.2s all;
    cursor: pointer;
    &:hover {
      color: var(--link-hover);
    }
  }
}

@media (max-width: 888px) {
  .category {
    max-height: 300px;
  }
}
</style>
