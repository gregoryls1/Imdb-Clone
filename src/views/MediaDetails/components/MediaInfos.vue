<template>
  <div>
    <h2 class="text-4xl font-medium pb-4">
      {{ details?.original_name || details?.title }}
    </h2>
    <div class="py-4">
      <h3 class="font-bold pb-1">Sinopse</h3>
      <p class="text-sm">{{ details?.overview }}</p>
    </div>
    <div class="py-4">
      <h3 class="font-bold pb-1">Criação</h3>
      <div class="flex md:flex-nowrap flex-wrap gap-2">
        <div
          v-for="(director, index) in directors"
          :key="index"
          class="text-sm md:w-full w-1/2"
        >
          <p>{{ director.name }}</p>
          <span class="text-xs font-extralight"
            >{{ director.job }}, {{ director.known_for_department }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { CastType, SearchResult } from '../../../types/SearchResult'

const { details, directors } = defineProps<{
  details: SearchResult | null
  directors: CastType[] | null
}>()
</script>
