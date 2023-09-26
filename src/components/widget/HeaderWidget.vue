<template>
    <header class="HeaderWidget">
        <router-link to="/" class="HeaderWidget_title">Жилфонд</router-link>
        <p class="HeaderWidget_user">Пользователь</p>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss">
@import '../../assets/mixins';

.HeaderWidget {
    display: flex;
    justify-content: space-between;

    &_title {
        color: var(--color-red);
        font-size: rem(32);
        text-decoration: none;
        font-weight: 700;
    }

    @include for-tablet-up {
        padding: rem(30) rem(5);
    }
}
</style>