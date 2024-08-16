<template>
  <div class="relative">
    <div
      :class="`flex justify-center bg-cover bg-no-repeat bg-imdb-black py-10 px-14 text-imdb-white-text md:px-20 lg:px-40`"
      :style="`background-image: url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${details?.backdrop_path})`"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"
      ></div>
      <div
        class="flex justify-center gap-2 w-full max-w-[1400px] z-10 flex-wrap md:flex-nowrap"
      >
        <div>
          <div>
            <img
              v-if="details?.poster_path"
              class="rounded-md"
              v-lazy="`https://image.tmdb.org/t/p/w300${details?.poster_path}`"
              alt="Movie Poster"
            />
          </div>
          <GenresList :details="details" />
        </div>
        <div class="w-full md:w-1/2 lg:w-2/5 pl-0 md:pl-4">
          <MediaInfos :details="details" :directors="directors" />
        </div>
      </div>
    </div>
  </div>
  <div class="p-14">
    <CastList :cast="cast" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '../../router'
import { useMediaDetails } from '../../stores/useMediaDetails'
import { CastType, SearchResult } from '../../types/SearchResult'
import CastList from './components/CastList.vue'
import MediaInfos from './components/MediaInfos.vue'
import GenresList from './components/GenresList.vue'

const mediaDetails = useMediaDetails()
const details = ref<SearchResult | null>(null)
const cast = ref<CastType[] | null>([])
const directors = ref<CastType[] | null>([])

onMounted(async () => {
  const id = router.currentRoute.value.params.id as string
  const mediaType = router.currentRoute.value.name

  if (mediaType === 'tvDetails') {
    await mediaDetails.fetchMediaDetails(id, 'tv')
    await mediaDetails.fetchCast(id, 'tv')
  } else {
    await mediaDetails.fetchMediaDetails(id, 'movie')
    await mediaDetails.fetchCast(id, 'movie')
  }
  details.value = mediaDetails.mediaDetails
  cast.value = mediaDetails.cast
  directors.value = mediaDetails.directors
})
</script>
