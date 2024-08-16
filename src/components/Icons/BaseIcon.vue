<template>
  <component
    :is="componentMap[name]"
    v-bind="$attrs"
    role="img"
    fill="currentColor"
  />
</template>

<script setup lang="ts">
import { defineProps, computed, DefineComponent } from 'vue'
import ImdbIcon from './ImdbIcon.vue'
import StarIcon from './StarIcon.vue'
import UserIcon from './UserIcon.vue'
import ImageIcon from './ImageIcon.vue'
import FilmIcon from './FilmIcon.vue'

type ComponentMap = {
  ImdbIcon: DefineComponent<{}, {}, any>
  StarIcon: DefineComponent<{}, {}, any>
  UserIcon: DefineComponent<{}, {}, any>
  ImageIcon: DefineComponent<{}, {}, any>
  FilmIcon: DefineComponent<{}, {}, any>
}

const { name } = defineProps<{
  name: keyof ComponentMap
}>()

const componentMap = computed<ComponentMap>(() => ({
  ImdbIcon,
  StarIcon,
  UserIcon,
  ImageIcon,
  FilmIcon,
}))
</script>

<style></style>
