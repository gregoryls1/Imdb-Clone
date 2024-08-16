import { render, screen, waitFor } from '@testing-library/vue'
import MediaDetails from './MediaDetails.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import { vi } from 'vitest'
import { SearchResult, CastType } from '../../types/SearchResult'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/media/:id',
      name: 'tvDetails',
      component: MediaDetails,
    },
  ],
})

const mediaDetailsMock = {
  fetchMediaDetails: vi.fn(),
  fetchCast: vi.fn(),
  mediaDetails: {
    backdrop_path: 'backdrop.jpg',
    poster_path: 'poster.jpg',
  } as SearchResult,
  cast: [{ name: 'Actor 1' }, { name: 'Actor 2' }] as CastType[],
  directors: [{ name: 'Director 1' }] as CastType[],
}

vi.mock('../../stores/useMediaDetails', () => ({
  useMediaDetails: () => mediaDetailsMock,
}))

describe('MediaDetails', () => {
  it('should correctly render media details', async () => {
    render(MediaDetails, { global: { plugins: [router] } })

    await waitFor(() => {
      expect(screen.getByAltText('Movie Poster')).toBeInTheDocument()

      expect(screen.getByText('Actor 1')).toBeInTheDocument()
      expect(screen.getByText('Actor 2')).toBeInTheDocument()
      expect(screen.getByText('Director 1')).toBeInTheDocument()
    })
  })
})
