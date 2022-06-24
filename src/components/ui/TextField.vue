<template>
  <div>
    <div class="relative mt-[10px]">
      <span v-if="icon" class="absolute inset-y-0 flex items-center">
        <img :src="icon" />
      </span>
      <input
        type="text"
        name="price"
        class="w-full border-b py-4 outline-none transition-colors hover:border-b-primary focus:border-b-primary"
        :class="{ 'cursor-pointer': !!$attrs.onClick, 'pl-10': icon }"
        :id="id"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :value="value || modelValue"
        @input="updateValue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  modelValue?: any
  value?: any
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  icon?: string
}>()

const emit = defineEmits<{
  (e: string, value: any): void
}>()

const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value)
}
</script>
