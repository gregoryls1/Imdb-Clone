<template>
  <div class="flex items-start justify-start gap-2 pt-4 flex-wrap">
    <div
      v-for="(genre, index) in details?.genres"
      :key="index"
      class="inline-block py-[2px] px-3 border-gray-300 border-[1px] rounded-full"
    >
      <span class="text-sm font-semibold">{{ genre?.name }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { SearchResult } from '../../../types/SearchResult'

const { details } = defineProps<{
  details: SearchResult | null
}>()
</script>
