<script setup lang="ts">
import { Field, ErrorMessage, useFieldError } from 'vee-validate'
const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
  id: string
  label: string
  modelValue?: string
  name: string
}>()
const { name, modelValue } = toRefs(props)
const existError = useFieldError(name.value)
const content = ref('')
watch(() => modelValue?.value, (val) => {
  content.value = val!
})
function updateModelValue (event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
	<div class="grid gap-2 items-center relative">
		<label
			:for="id"
			class="text-primary text-xl"
			:class="{'text-red-500': existError}"
		>
			<slot name="prepend-icon"></slot>
			{{ label }}
			<slot name="append-icon"></slot>
		</label>
		<Field
			:name="name"
			as="textarea"
			v-model="content"
			@change="updateModelValue"
			class="bg-cotton-gray rounded-md py-2 px-4 w-full h-60 font-serif text-primary"
			:class="{'outline outline-1 outline-red-500': existError}"
		/>
		<ErrorMessage
			:name="name"
			class="absolute left-0 top-full text-xs text-red-500"
		/>
	</div>
</template>
