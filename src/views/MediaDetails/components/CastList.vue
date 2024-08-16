<template>
  <div class="overflow-y-auto flex">
    <div v-for="(actor, index) in cast" :key="index" class="px-2">
      <div>
        <div class="w-[100px]">
          <img
            v-if="actor.profile_path"
            v-lazy="`https://image.tmdb.org/t/p/w300/${actor.profile_path}`"
          />
          <div
            v-else
            class="w-full h-[150px] flex items-center justify-center bg-imdb-light-gray"
          >
            <BaseIcon class="size-14" name="UserIcon" />
          </div>
        </div>
        <div>
          <p class="text-sm">{{ actor.name }}</p>
          <span class="text-xs text-imdb-light-black">{{
            actor.character
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { CastType } from '../../../types/SearchResult'
import BaseIcon from '../../../components/Icons/BaseIcon.vue'

const { cast } = defineProps<{
  cast: CastType[] | null
}>()
</script>
