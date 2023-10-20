<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Field, ErrorMessage, useFieldError } from 'vee-validate'
const emit = defineEmits(['update:modelValue'])
const props = withDefaults(
  defineProps<{
	id: string
	modelValue?: string
	label: string
	name: string
	appendIcon?: string
	prependIcon?: string
	width: string
	type?: string
	icon?: string
	mask?: string
  }>(),
  { type: 'text' }
)
const { name, modelValue } = toRefs(props)
const existError = useFieldError(name.value)
const content = ref('')
watch(() => modelValue?.value, (val) => {
	content.value = val!
})
function updateModelValue(event: Event) {
	const target = event.target as HTMLInputElement
	emit('update:modelValue', target.value)
}
</script>

<template>
	<div class="grid gap-2 items-center relative">
		<label
			:for="id"
			class="text-primary text-xl"
			:class="[width, {'text-red-500': existError}]"
		>
			<slot name="prepend-icon">
				<client-only>
					<font-awesome-icon v-if="prependIcon" :icon="prependIcon" />
				</client-only>
			</slot>
			{{ label }}
			<slot name="append-icon">
				<client-only>
					<font-awesome-icon v-if="appendIcon" :icon="appendIcon" />
				</client-only>
			</slot>
		</label>
		<Field
			:name="name"
			:type="type"
			v-maska
			:data-maska="mask"
			v-model="content"
			@change="updateModelValue"
			class="bg-cotton-gray rounded-md py-2 px-4 w-full font-serif text-primary"
			:class="{'outline outline-1 outline-red-500': existError}"
		/>
		<ErrorMessage
			:name="name"
			class="absolute left-0 top-full text-xs text-red-500"
		/>
	</div>
</template>
