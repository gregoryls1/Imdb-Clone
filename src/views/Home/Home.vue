<template>
  <div class="bg-imdb-black h-screen">
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
            :vote="movie.vote_average"
            :date="movie.release_date"
          />
        </router-link>
      </div>
    </div>
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
            :vote="movie.vote_average"
            :date="movie.release_date"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Card from '../../components/Card/Card.vue'
import { useListMedias } from '../../stores/useListMedias'

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
