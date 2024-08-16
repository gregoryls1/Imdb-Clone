<template>
  <header class="bg-[#121212] shadow-md">
    <nav class="container mx-auto py-2 flex items-center justify-between gap-2">
      <router-link class="pr-12" to="/">
        <BaseIcon name="ImdbIcon" data-testid="logo_header" />
      </router-link>
      <Search />
    </nav>
  </header>
</template>

<script setup lang="ts">
import BaseIcon from '../Icons/BaseIcon.vue'
import Search from '../Search/Search.vue'
</script>
