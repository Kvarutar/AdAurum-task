<template>
  <button class="btn" :class="'btn_' + mode" :disabled="disabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    mode: {
      Type: String,
      required: false,
      default: 'primary',
    },
    disabled: Boolean,
  },
  methods: {
    onClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.btn {
  padding: 12px 22px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s all;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all;

  &_primary {
    background-color: var(--button-primary);

    &:hover {
      background-color: var(--button-primary-hover);
    }

    &:active {
      background-color: var(--button-primary-active);
    }
  }
  &_secondary {
    background-color: var(--button-secondary);

    &:hover {
      background-color: var(--button-secondary-hover);
    }

    &:active {
      background-color: var(--button-secondary-active);
    }
  }
}
</style>
