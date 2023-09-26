<template>
    <div class="UserList">
        <search-widget v-model="searchTerm" @input="handleSearch" />
        <h3 class="UserList_subtitle">
            Результаты
        </h3>
        <div class="UserList_list empty"  v-if="!searchTerm">
            Начните поиск
        </div>
        <div v-else-if="JSON.stringify(filteredUsers) === '{}'">
            Ничего не найдено
        </div>
        <div class="UserList_list" v-else>
            <router-link 
                :to="`/user/${user.id}`" 
                v-for="user in filteredUsers" 
                :key="user.id" 
                class="UserList_item"
            >
                <user-list-card :user="user" />
            </router-link>
        </div>
      
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue';
import store from '../store';
import UserListCard from './card/UserListCard.vue';
import SearchWidget from './widget/SearchWidget.vue'

const searchTerm = ref('')

const filteredUsers = computed(() => {
    return Object.fromEntries(
        Object.entries(store.state.users)
        .filter(user => {
            let term = searchTerm.value
            const pattern = /[0-9]/g.test(term)
            return pattern ? 
                user[1].id === Number(term) :
                user[1].name.includes(term)
        })) 
    
})

const handleSearch = (e) => {
    searchTerm.value = e.target.value
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins';

.UserList {
    padding: rem(27) rem(20);

    &_list {
        display: flex;
        flex-direction: column;
        gap: rem(18);
    }

    &_subtitle {
        color: var(--color-dark);
        font-weight: 600;
        line-height: rem(22);
        font-size: rem(16);
        margin-bottom: rem(18);
    }

    &_item {
        text-decoration: none;
    }
}
</style>