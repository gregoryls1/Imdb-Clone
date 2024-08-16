import { render, screen } from '@testing-library/vue'
import Home from './Home.vue'
import { createPinia } from 'pinia'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../../stores/useListMedias', () => ({
  useListMedias: () => ({
    fetchListMediaNowPlaying: vi.fn(),
    fetchListMediaPopular: vi.fn(),
    listMediasNowPlaying: [
      {
        id: 1,
        poster_path: '/poster1.jpg',
        title: 'Movie 1',
        vote_average: 8.5,
        release_date: '2024-01-01',
      },
    ],
    listMediasPopular: [
      {
        id: 2,
        poster_path: '/poster2.jpg',
        title: 'Movie 2',
        vote_average: 7.5,
        release_date: '2024-02-01',
      },
    ],
  }),
}))

describe('Home', () => {
  it('renders movies in the "Now Playing" section', async () => {
    const pinia = createPinia()

    render(Home, {
      global: {
        plugins: [pinia],
      },
    })

    const nowPlayingCard = await screen.findByText('Movie 1')
    expect(nowPlayingCard).toBeInTheDocument()

    const nowPlayingLink = await screen.findByTestId('movie-link-nowPlaying')
    expect(nowPlayingLink).toBeInTheDocument()
  })

  it('renders movies in the "Popular" section', async () => {
    const pinia = createPinia()

    render(Home, {
      global: {
        plugins: [pinia],
      },
    })

    const popularCard = await screen.findByText('Movie 2')
    expect(popularCard).toBeInTheDocument()

    const popularLink = await screen.findByTestId('movie-link-popular')
    expect(popularLink).toBeInTheDocument()
  })
})
