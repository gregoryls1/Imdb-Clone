<template>
  <div class="flex-1 relative w-3/4">
    <input
      type="text"
      placeholder="Search IMDB"
      v-model="keywords"
      class="w-full bg-white h-[30px] outline-none px-3 text-sm"
      @input="searchMedia"
    />
    <SearchResults
      :results="resultsSearch"
      :show-menu="showMenu"
      :keywords="keywords"
      v-on:toggle-menu="handleMenuToggle"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import SearchResults from './SearchResults/SearchResults.vue'
import { useSearchMedias } from '../../stores/useSearchMedias'

const keywords = ref<string>('')
const showMenu = ref<boolean>(false)

const media = useSearchMedias()

const searchMedia = () => {
  media.getMediasByName(keywords.value, 1)
  showMenu.value = media.listMedias.length > 0
}
const resultsSearch = computed(() => {
  return media.listMedias
})

const handleMenuToggle = (isVisible: boolean) => {
  showMenu.value = isVisible
}
</script>
<style></style>
