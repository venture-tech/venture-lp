<script setup lang="ts">
import { useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge'

const defaultClasses = `
  flex flex-col justify-between justify-self-center
  bg-primary-100 bg-primary-200 bg-primary-300 bg-primary-400
  rounded-2xl
  py-10 px-[20px]
  font-serif font-light text-white
  w-72 h-[348px]
`
const attrs = useAttrs() as { class: string }

const cardClasses = computed(() => {
  return twMerge(
    defaultClasses,
    attrs.class
  )
})
</script>

<template>
    <div
        :class="cardClasses"
    >
        <h6 class="text-4xl w-full"><slot name="title"></slot></h6>
        <p class="text-xl"><slot name="description"></slot></p>
    </div>
</template>
