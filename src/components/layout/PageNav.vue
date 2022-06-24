<template>
  <div class="mb-2 flex items-center justify-between">
    <div class="w-12 text-left">
      <button class="btn btn-icon" @click="$router.go(-1)">
        <img :src="assets.icons.chevronLeft" />
      </button>
    </div>
    <div class="">
      <h3 v-if="title" class="font-bold">
        {{ title }}
      </h3>
    </div>
    <div class="w-12 text-right">
      <button
        v-if="addButtonRoute"
        class="btn btn-icon"
        @click="$router.push({ name: addButtonRoute })"
      >
        <img :src="assets.icons.plus" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAssets } from '@/use/assets'

defineProps<{
  title?: string
  addButtonRoute?: string
}>()

const assets = useAssets()
</script>
