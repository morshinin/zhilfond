<template>
    <div class="SearchWidget">
        <label for="search" class="SearchWidget_label">Поиск сотрудников</label>
        <input 
            :value="modelValue" 
            type="text" 
            class="SearchWidget_control" 
            placeholder="Введите id или имя"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script setup>
defineProps({
    modelValue: String,
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import '../../assets/mixins';

.SearchWidget {
    display: flex;
    flex-direction: column;
    gap: rem(22);
    margin-bottom: rem(29);

    &_label {
        color: var(--color-dark);
        font-weight: 600;
        line-height: rem(22);
        font-size: rem(16);
    }

    &_control {
        color: var(--color-gray);
        padding: rem(16);
        border: 1px solid var(--color-light-gray);
        font-size: rem(14);
        border-radius: rem(8);
        font-weight: 400;
    }
}
</style>