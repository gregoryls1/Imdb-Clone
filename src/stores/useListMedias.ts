import { defineStore } from 'pinia'
import request from '../api/request'
import { SearchResult } from '../types/SearchResult'
import { useToast } from 'vue-toastify'

export const useListMedias = defineStore('listMedias', {
  state: () => ({
    listMediasNowPlaying: [] as SearchResult[],
    listMediasPopular: [] as SearchResult[],
  }),
  actions: {
    async fetchListMediaNowPlaying() {
      const toast = useToast()
      try {
        const { data } = await request.get(
          '/3/movie/now_playing?language=pt-BR&region=BR',
        )
        this.listMediasNowPlaying = data.results
      } catch (error) {
        toast.error('Erro ao buscar filmes em cartaz')
      }
    },

    async fetchListMediaPopular() {
      const toast = useToast()
      try {
        const { data } = await request.get(
          '/3/movie/popular?language=pt-BR&region=BR',
        )
        this.listMediasPopular = data.results
      } catch (error) {
        toast.error('Erro ao buscar filmes populares')
      }
    },
  },
})
