<template>
  <div class="bg-imdb-black relative w-[205px]">
    <img
      v-if="img"
      :alt="name"
      class="h-[300px] w-full rounded"
      v-lazy="`https://images.tmdb.org/t/p/original/${img}`"
    />
    <div
      v-else
      class="w-full h-[300px] flex items-center justify-center bg-imdb-light-gray rounded"
    >
      <BaseIcon class="size-14" name="FilmIcon" />
    </div>
    <div class="p-3">
      <div class="flex items-center justify-start mb-2 gap-1">
        <BaseIcon name="StarIcon" data-testid="fallback-icon" />
        <span class="ml-1 text-imdb-white-text">{{ vote }}</span>
      </div>
      <h3
        class="line-clamp-1 text-imdb-white-text"
        title="La Casa dos Famosos México"
      >
        {{ name }}
      </h3>
      <span class="text-imdb-gray-text">{{ date }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseIcon from '../Icons/BaseIcon.vue'

const { name, date, img, vote } = defineProps<{
  name: string
  date: string
  img: string | null
  vote: number
}>()
</script>
