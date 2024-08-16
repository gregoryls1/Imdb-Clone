<template>
  <div class="flex flex-col items-center justify-center py-12">
    <div class="px-8">
      <div
        v-for="(media, index) in listMedias"
        :key="index"
        class="w-full shadow-md border-solid border mt-4"
      >
        <router-link
          :to="`/${media.media_type}/${media.id}`"
          class="flex"
          data-testid="movie-item"
        >
          <div>
            <div v-if="media.poster_path" class="w-24 h-auto">
              <img
                class="w-full"
                v-lazy="
                  `https://media.themoviedb.org/t/p/w94_and_h141_bestv2/${media.poster_path}`
                "
              />
            </div>
            <div
              class="flex items-center justify-center w-24 h-36 bg-imdb-light-gray"
              v-else
            >
              <BaseIcon name="FilmIcon" />
            </div>
          </div>
          <div class="flex flex-col items-start justify-around py-3 px-4">
            <div>
              <h3 class="font-semibold text-sm">
                {{ media.title || media.original_title || media.name }}
              </h3>
              <span class="text-imdb-gray text-sm">{{
                media.first_air_date
              }}</span>
            </div>

            <p class="text-sm">
              {{ truncateParagraph(media.overview) }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <Pagination
      :currentPage="currentPage"
      :totalPages="10"
      @change-page="changePage"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '../../router'
import { useSearchMedias } from '../../stores/useSearchMedias'
import { SearchResult } from '../../types/SearchResult'
import Pagination from '../../components/Pagination/Pagination.vue'
import BaseIcon from '../../components/Icons/BaseIcon.vue'

const searchTerm = useSearchMedias()

const term = router.currentRoute.value.query.q as string
const page =
  Number.parseInt(router.currentRoute.value.query.page as string) || 1

const listMedias = ref<SearchResult[] | null>(null)

const currentPage = ref<number>(page)
const totalPages = ref<number>(0)

onMounted(async () => {
  await searchTerm.getMediasByName(term, currentPage.value)
  listMedias.value = searchTerm.listMedias
  totalPages.value = searchTerm.totalPages
})

const truncateParagraph = (paragraph: string) => `${paragraph.slice(0, 400)}...`

const changePage = async (value: number) => {
  currentPage.value = value
  router.push({ path: '/search', query: { q: term, page: currentPage.value } })
  await searchTerm.getMediasByName(term, currentPage.value)
  listMedias.value = searchTerm.listMedias
}
</script>
