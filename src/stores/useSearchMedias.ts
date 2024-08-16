import { ref } from 'vue'
import { defineStore } from 'pinia'
import request from '../api/request'
import { SearchResult } from '../types/SearchResult'
import { useToast } from 'vue-toastify'

export const useSearchMedias = defineStore('searchMedia', {
  state: () => ({
    listMedias: [] as SearchResult[],
    totalPages: ref<number>(0),
  }),
  actions: {
    async getMediasByName(keywords: string, page: number) {
      const toast = useToast()
      try {
        const { data } = await request.get(
          `/3/search/multi?query=${keywords}&language=pt-BR&page=${page}`,
        )
        this.listMedias = data.results.filter(
          (item: SearchResult) => item.media_type !== 'person',
        )
        this.totalPages = data.total_pages
      } catch (error) {
        toast.error('Erro ao fazer busca')
      }
    },
  },
})
