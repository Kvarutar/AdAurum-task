<script setup>
import CategoryItem from './CategoryItem.vue'
import { useFilesStore } from '@/core/stores/files'
import { ref } from 'vue'

const fileStore = useFilesStore()

const isAllMedias = ref(false)
const isAllReports = ref(false)

function showMore(type) {
  if (type === 'media') {
    isAllMedias.value = true
  } else if (type === 'report') {
    isAllReports.value = true
  }
}

function showLess(type) {
  if (type === 'media') {
    isAllMedias.value = false
  } else if (type === 'report') {
    isAllReports.value = false
  }
}

function isShownMore(type) {
  if (type === 'media') {
    return isAllMedias.value
  } else if (type === 'report') {
    return isAllReports.value
  }
}
</script>

<template>
  <section class="files">
    <h2 class="files__title">Файлы</h2>
    <div v-if="fileStore.media.length > 0 || fileStore.reports.length > 0" class="files__content">
      <CategoryItem
        v-if="fileStore.media.length > 0"
        :filesData="isAllMedias ? fileStore.getAllMedias : fileStore.getLastMedias(4, 1)"
        title="Медиапланы"
        @onShowMore="() => showMore('media')"
        @onShowLess="() => showLess('media')"
        :isShownMore="isShownMore('media')"
      />
      <CategoryItem
        v-if="fileStore.reports.length > 0"
        :filesData="isAllReports ? fileStore.getAllReports : fileStore.getLastReports(4, 1)"
        title="Отчеты"
        @onShowMore="() => showMore('report')"
        @onShowLess="() => showLess('report')"
        :isShownMore="isShownMore('report')"
      />
    </div>
    <div v-else class="files__content files__content_empty">
      <img src="../../assets/images/EmptyFiles.png" alt="No files" class="files__empty-image" />
      <p class="files__empty-descr">
        Закажи у&nbsp;личного помощника медиаплан. Он&nbsp;появится в&nbsp;этом разделе
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.files {
  background-color: var(--background);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 28px 20px;
  overflow-y: auto;
  &__title {
    margin-bottom: 30px;
  }
  &__content {
    max-height: 100%;
    &_empty {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  &__subtitle {
    margin-bottom: 20px;
  }
  &__block {
    margin-bottom: 30px;
  }
  &__empty {
    &-image {
      width: 100%;
      height: auto;
    }
    &-descr {
      text-align: center;
      margin-top: 30px;
    }
  }
}

@media (max-width: 1152px) {
  .files {
    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      &_empty {
        flex-direction: row;
      }
    }
    &__empty {
      &-image {
        max-height: 304px;
        width: auto;
      }
    }
  }
}
@media (max-width: 888px) {
  .files {
    &__content {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    &__empty {
      &-image {
        margin: auto;
      }
    }
  }
}
</style>
