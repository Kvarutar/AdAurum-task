import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
  state: () => ({ messages: [] }),
  actions: {
    addMessage(message) {
      this.messages.unshift(message)
    },
  },
})
