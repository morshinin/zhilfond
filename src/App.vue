<template>
  <header-widget />
  <main class="MainGlobal">
    <user-list class="MainGlobal_sidebar" />
    <div class="MainGlobal_body" v-if="$route.params.id">
      <RouterView />
    </div>
    <div class="MainGlobal_body -is-empty" v-else>
        Выберите сотрудника, чтобы посмотреть его профиль
    </div>
    <div class="MainGlobal_error" v-if="store.state.error">
      {{ handleErrorMessage }}
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import UserList from './components/UserList.vue';
import HeaderWidget from './components/widget/HeaderWidget.vue';
import store from './store'

const errorMessages = {
  'AxiosError: Request failed with status code 404': 'Неверные параметры запроса',
  'AxiosError: Network Error': 'Ошибка сервера',
}

const handleErrorMessage = computed(() => {
  const error = store.state.error
  if (!error) {
    return
  }
  return errorMessages[error]
})

async function callUsers() {
  await store.dispatch('loadUsers')
}

onMounted(() => {
    callUsers()
})
</script>

<style lang="scss" scoped>
@import './assets/mixins';

.MainGlobal {
  &_sidebar {
    border-right: 1px solid var(--color-dark-gray);
  }

  &_error {
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: rem(100);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }

  @include for-tablet-up {
    display: grid;
    grid-template-columns: rem(291) auto;
    background-color: var(--color-lighter-gray);
    border-radius: rem(10);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.10);
    min-height: 50vw;

    &_body.-is-empty {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
