<template>
  <div class="bg-imdb-black">
    <div class="flex flex-col px-16">
      <h3 class="text-imdb-white-text text-xl font-bold pt-10 pb-5">
        Nos cinemas
      </h3>
      <div class="flex overflow-y-auto">
        <div v-for="(movie, index) in mediaNowPlaying" class="px-1">
          <router-link
            class="pr-12"
            :to="`/movie/${movie.id}`"
            data-testid="movie-link-nowPlaying"
          >
            <Card
              :key="index"
              :img="movie.poster_path || null"
              :name="movie.title || movie.name"
              :vote="decimalRound(movie.vote_average)"
              :date="converterData(movie.release_date)"
            />
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex flex-col px-16">
      <h3 class="text-imdb-white-text text-xl font-bold pt-10 pb-5">
        Populares
      </h3>
      <div class="flex overflow-y-auto">
        <div v-for="(movie, index) in mediaPopular" class="px-1">
          <router-link
            class="pr-12"
            :to="`/movie/${movie.id}`"
            data-testid="movie-link-popular"
          >
            <Card
              :key="index"
              :img="movie.poster_path"
              :name="movie.title || movie.name"
              :vote="decimalRound(movie.vote_average)"
              :date="converterData(movie.release_date)"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Card from '../../components/Card/Card.vue'
import { useListMedias } from '../../stores/useListMedias'
import { decimalRound, converterData } from '../../utils/functions'

const listMedia = useListMedias()

listMedia.fetchListMediaNowPlaying()
listMedia.fetchListMediaPopular()

const mediaNowPlaying = computed(() => {
  return listMedia.listMediasNowPlaying
})

const mediaPopular = computed(() => {
  return listMedia.listMediasPopular
})
</script>
