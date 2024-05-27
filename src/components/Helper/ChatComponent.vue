<script setup>
import CustomButton from '@/shared/CustomButton.vue'
import { useFilesStore } from '@/core/stores/files'
import { useMessagesStore } from '@/core/stores/messages'
import { ref } from 'vue'
import { uuid } from 'vue-uuid'

const message = ref('')

const fileStore = useFilesStore()
const newMedia = ref({
  title: 'CompanyName',
  isLoaded: true,
  src: 'file.pdf',
})
const newReport = ref({
  title: 'CompanyName',
  isLoaded: false,
  src: 'file.pdf',
})

const messagesStore = useMessagesStore()

const onSendMessage = () => {
  messagesStore.addMessage({
    content: message.value,
    author: 'Me',
    id: uuid.v4(),
    time: Date.now(),
  })
  message.value = ''

  setTimeout(() => {
    messagesStore.addMessage({
      content:
        'Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt.',
      author: 'John',
      id: uuid.v4(),
      time: Date.now(),
    })
  }, 2000)
}
</script>

<template>
  <div class="chat">
    <div class="chat__content">
      <div v-if="messagesStore.messages.length > 0" class="chat__history">
        <div
          v-for="msg in messagesStore.messages"
          :key="msg.id"
          class="chat__item"
          :class="msg.author !== 'Me' && 'chat__item_companion'"
        >
          <img
            v-if="msg.author !== 'Me'"
            src="../../assets/images/Man.png"
            alt="Man"
            class="chat__avatar"
          />
          <div class="chat__text">
            <div class="chat__message">
              <p>{{ msg.content }}</p>
            </div>
            <div class="chat__meta" :class="msg.author !== 'Me' && 'chat__meta_companion'">
              <h3 v-if="msg.author !== 'Me'">{{ msg.author }}</h3>
              <h4>
                {{
                  (new Date(msg.time).getHours() < 10 ? '0' : '') + new Date(msg.time).getHours()
                }}:{{
                  (new Date(msg.time).getMinutes() < 10 ? '0' : '') +
                  new Date(msg.time).getMinutes()
                }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="chat__history chat__history_empty">
        <img src="../../assets/images/EmptyChat.png" alt="No history" class="chat__empty-image" />
        <p class="chat__empty-descr">
          Это чат с&nbsp;администратором. Ты&nbsp;можешь с&nbsp;ним пообщаться по&nbsp;любому
          вопросу о&nbsp;нашем сервисе и&nbsp;узнать о&nbsp;ходе работы
        </p>
      </div>
      <div class="chat__buttons">
        <CustomButton @onClick="fileStore.addMedia(newMedia)">Заказать медиаплан</CustomButton>
        <CustomButton mode="secondary" @onClick="fileStore.addReport(newReport)"
          >Заказать отчет</CustomButton
        >
      </div>
    </div>
    <div class="input">
      <textarea rows="3" cols="3" v-model.trim="message"></textarea>
      <div class="input__controls">
        <img src="../../assets/icons/add-file.svg" alt="file" />
        <img src="../../assets/icons/add-image.svg" alt="image" />
      </div>
      <div class="input__send" @click="onSendMessage">
        <img src="../../assets/icons/send.svg" alt="send" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chat {
  background-color: var(--neutral-secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: hidden;
  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
  }
  &__item {
    align-self: flex-end;
    transform: rotate(180deg);
    max-width: 70%;
    direction: ltr;
    display: flex;
    gap: 13px;
    &_companion {
      align-self: flex-start;
    }
  }
  &__avatar {
    width: 49px;
    height: 49px;
  }
  &__meta {
    text-align: end;
    margin-top: 10px;
    &_companion {
      text-align: start;
      display: flex;
      gap: 8px;
    }
  }
  &__message {
    background-color: var(--background);
    border-radius: 12px;
    padding: 16px 22px;
  }
  &__buttons {
    display: flex;
    gap: 12px;
    padding-top: 20px;
  }
  &__history {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    transform: rotate(180deg);
    direction: rtl;
    gap: 20px;
    &_empty {
      justify-content: center;
      transform: rotate(0deg);
    }
  }
  &__empty {
    &-image {
      width: 130px;
      height: auto;
      display: block;
      margin: 0 auto;
      user-select: none;
    }
    &-descr {
      text-align: center;
      max-width: 470px;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
}
.input {
  position: relative;
  textarea {
    margin-bottom: -2px;
    position: relative;
    z-index: 1;
    background-color: var(--background);
    border: 1px solid var(--background);
    border-radius: 20px;
    padding: 25px 70px 42px 20px;
    transition: 0.2s all;
    width: 100%;
    resize: none;
    overflow: hidden;
    &:focus {
      border: 1px solid var(--primary);
    }
  }
  &__controls {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    z-index: 2;
    gap: 20px;
    img {
      cursor: pointer;
    }
  }
  &__send {
    cursor: pointer;
    position: absolute;
    right: 20px;
    bottom: 20px;
    background-color: var(--primary);
    padding: 8px;
    z-index: 2;
    border-radius: 100%;
    display: flex;
    transition: 0.2s all;
    &:hover {
      background-color: var(--link-hover);
    }
  }
}

@media (max-width: 1152px) {
  .chat {
    &__history {
      max-height: 300px;
    }
  }
}

@media (max-width: 888px) {
  .chat {
    &__buttons {
      display: block;
      .btn {
        margin-right: 0;
        margin-left: auto;
        margin-bottom: 12px;
      }
    }
    &__item {
      max-width: 91%;
    }
  }
}
</style>
