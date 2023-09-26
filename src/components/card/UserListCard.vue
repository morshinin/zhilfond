<template>
    <article class="CardUserList">
        <figure class="CardUserList_figure">
            <img src="/placeholder-s.jpg" alt="" class="CardUserList_img">
        </figure>
        <div class="CardUserList_body">
            <h2 class="CardUserList_name">{{ user.name }}</h2>
            <p class="CardUserList_email">{{ user.email }}</p>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    user: {
        type: Object,
        default: () => {
            return {
                name: 'Bret',
                email: 'brogers@gmail.com',
            }
        },
    }
})

</script>

<style lang="scss">
@import '../../assets/mixins';

.CardUserList {
    border-radius: rem(10);
    font-size: rem(14);
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.10);
    transition: background-color ease-in-out .2s;
    border: 1px solid var(--color-dark-gray);

    &:hover {
        background-color: var(--color-dark-gray);
    }

    &_body {
        display: flex;
        flex-direction: column;
        gap: rem(5);
        padding: rem(15);
        overflow: hidden;
    }

    &_name {
        color: var(--color-dark);
        font-size: inherit;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &_email {
        color: var(--color-gray);
        font-size: inherit;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &_img {
        border-top-left-radius: rem(10);
        border-bottom-left-radius: rem(10);
    }
}
</style>