<script>
export default {
  name: 'FileItem',
  props: {
    title: String,
    isLoaded: Boolean,
    src: String,
  },
}
</script>

<template>
  <div class="file">
    <div class="file__wrapper">
      <img src="../../assets/icons/file.svg" alt="file" />
      <h4>{{ title }}</h4>
    </div>
    <a v-if="isLoaded" :href="src" download target="_blank" class="file__status">
      <img src="../../assets/icons/file-download.svg" alt="Download" />
    </a>
    <div v-else class="file__status file__status_processing">
      <img src="../../assets/icons/file-refresh.svg" alt="In progress" />
    </div>
  </div>
</template>

<style lang="scss">
.file {
  background-color: var(--neutral);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 9px;
  }
  &__status {
    padding: 8px;
    border-radius: 4px;
    background-color: var(--primary);
    cursor: pointer;
    &_processing {
      background-color: var(--neutral-thirdly);
      cursor: default;
    }
  }
}
</style>
