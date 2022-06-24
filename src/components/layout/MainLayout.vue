<template>
  <div class="container mx-auto px-8 pt-5">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <h1 v-if="title" class="pb-4 text-[28px] font-bold">{{ title }}</h1>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>
