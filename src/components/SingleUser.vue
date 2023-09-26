<template>
    <div class="SingleUser">
        <figure class="SingleUser_figure">
            <img src="/placeholder-m.jpg" alt="" class="SingleUser_img">
        </figure>
        <div class="SingleUser_body">
            <div class="SingleUser_meta">
                <h1 class="SingleUser_title">
                    {{ singleUser?.name }}
                </h1>
                <div class="SingleUser_group">
                    <strong>email:</strong>
                    {{ singleUser?.email }}
                </div>
                <div class="SingleUser_group">
                    <strong>phone:</strong> {{ singleUser?.phone }}
                </div>
            </div>
            <div class="SingleUser_about">
                <h3 class="SingleUser_subtitle">О себе:</h3>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store'
import { useRoute } from 'vue-router';

const route = useRoute()

const singleUser = computed(() => {
    const entries = Object.entries(store.state.users)
                        .filter(user => user[1].id === Number(route.params.id))
    return Object.values(Object.fromEntries(entries))[0]
})
</script>

<style lang="scss" scoped>
@import '../assets/mixins';

.SingleUser {
    padding: rem(30) rem(20);

    &_title {
        font-size: rem(16);
        line-height: rem(22);
    }

    &_subtitle {
        font-size: rem(16);
        margin-bottom: rem(25);
    }

    &_body {
        display: flex;
        flex-direction: column;
        gap: rem(20);
    }

    &_group {
        display: flex;
        gap: rem(5);
    }

    &_meta {
        display: flex;
        flex-direction: column;
        gap: rem(10);
    }

    @include for-tablet-up {
        display: grid;
        grid-template-columns: rem(425) auto;
        gap: rem(60);
    }
}
</style>