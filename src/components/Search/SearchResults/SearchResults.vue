<template>
  <div
    v-if="showMenu"
    class="bg-imdb-search-bg absolute top-0 left-0 right-0 z-20 mt-[30px]"
  >
    <ul class="mt-2">
      <li
        v-for="(item, index) in formattedResults(results)"
        :key="index"
        class="flex items-start justify-between gap-2 border-b-[1px] border-b-gray-200 p-3 hover:bg-imdb-light-blue-bg hover:cursor-pointer"
        @click="navigateTo(getItemUrl(item))"
      >
        <div v-if="item.poster_path">
          <img
            v-lazy="`https://image.tmdb.org/t/p/w500/${item.poster_path}`"
            class="w-[50px] rounded-md"
            :alt="item.name || item.title"
          />
        </div>
        <div
          v-else
          class="flex items-center justify-center bg-imdb-light-gray w-12 h-16 rounded opacity-50"
        >
          <BaseIcon name="ImageIcon" />
        </div>
        <div class="flex-1">
          <p class="text-white">{{ item.name || item.title }}</p>
          <p class="text-gray-400 text-xs">
            {{ item.first_air_date || item.release_date }}
          </p>
          <p class="text-gray-400 text-xs line-clamp-1">
            {{ item.overview }}
          </p>
        </div>
      </li>
      <li class="p-2">
        <router-link
          @click="emit('toggle-menu', false)"
          :to="{
            path: '/search',
            query: {
              q: keywords,
              page: 1,
            },
          }"
        >
          <p class="text-white text-sm">See all results for "{{ keywords }}"</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { SearchResult } from '../../../types/SearchResult'
import router from '../../../router'
import BaseIcon from '../../Icons/BaseIcon.vue'

const { showMenu, results, keywords } = defineProps<{
  showMenu: boolean
  results: SearchResult[]
  keywords: string
}>()

const emit = defineEmits()

const navigateTo = (path: string) => {
  router.push({ path })
  emit('toggle-menu', false)
}

const getItemUrl = (item: SearchResult) => {
  return item.media_type === 'tv' ? `/tv/${item.id}` : `/movie/${item.id}`
}

const formattedResults = (results: SearchResult[]) => {
  return results.slice(0, 6)
}
</script>
<style></style>
