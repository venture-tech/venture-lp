<script lang="ts" setup>
import { useAttrs, computed } from 'vue'
import { twMerge } from 'tailwind-merge'

const defaultClasses = `
  flex justify-center items-center
  bg-primary hover:bg-blue-700 text-white font-serif rounded-full
  w-full sm:w-auto h-10 px-4
`
const attrs = useAttrs() as { class: string }

const buttonClasses = computed(() => {
    return twMerge(
        defaultClasses,
        attrs.class
    )
})
type ButtonProps = { success?: boolean, loading?: boolean };
defineProps<ButtonProps>()
</script>

<template>
    <button :class="buttonClasses" :data-success="success">
        <slot name="loading" v-if="loading">
            <div class="w-6 h-6 border-4 border-solid border-[#1e3a8ad9] border-t-4 border-t-[#ccc] rounded-[50%] animate-spin" />
        </slot>
        <slot v-else></slot>
    </button>
</template>
