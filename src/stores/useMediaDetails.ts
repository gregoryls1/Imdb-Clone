import { defineStore } from 'pinia'
import request from '../api/request'
import { SearchResult, CastType } from '../types/SearchResult'
import { useToast } from 'vue-toastify'

export const useMediaDetails = defineStore('mediaDetails', {
  state: () => ({
    mediaDetails: null as SearchResult | null,
    cast: null as CastType[] | null,
    directors: null as CastType[] | null,
  }),
  actions: {
    async fetchMediaDetails(media_id: string, media_type: string) {
      const toast = useToast()
      try {
        const { data } = await request.get(
          `/3/${media_type}/${media_id}?&language=pt-BR`,
        )
        this.mediaDetails = data
        console.log(data)
      } catch (error) {
        toast.error('Erro ao buscar informações')
      }
    },

    async fetchCast(media_id: string, media_type: string) {
      const toast = useToast()

      try {
        const { data } = await request.get(
          `/3/${media_type}/${media_id}/credits?&language=pt-BR`,
        )
        this.cast = data.cast
        this.directors = data.crew.filter(
          (item: CastType) => item.department === 'Writing',
        )
      } catch (error) {
        toast.error('Erro ao buscar elenco')
      }
    },
  },
})
