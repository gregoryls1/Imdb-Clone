<template>
  <nav class="pt-4" aria-label="Page navigation">
    <ul class="inline-flex -space-x-px">
      <li>
        <button
          class="p-2 border-r-2 rounded-l-md text-sm font-medium text-white bg-imdb-light-black disabled:bg-gray-400 disabled:cursor-none"
          @click="$emit('change-page', currentPage - 1)"
          :disabled="currentPage === 1"
          data-test="previous-button"
        >
          Anterior
        </button>
      </li>

      <li>
        <button
          class="p-2 border-r-2 rounded-r-md text-sm font-medium text-white bg-imdb-light-black disabled:bg-gray-400 disabled:cursor-none"
          @click="$emit('change-page', currentPage + 1)"
          :disabled="currentPage === totalPages"
        >
          Próximo
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const { currentPage, totalPages } = defineProps<{
  currentPage: number
  totalPages: number
}>()
</script>
