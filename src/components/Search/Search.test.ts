import { render, fireEvent, screen, waitFor } from '@testing-library/vue'
import Search from './Search.vue'
import { SearchResult } from '../../types/SearchResult'
import { vi } from 'vitest'

const mockGetMediasByName = vi.fn()
const mockStore = {
  getMediasByName: mockGetMediasByName,
  listMedias: [] as SearchResult[],
  $state: {},
  $patch: vi.fn(),
  $reset: vi.fn(),
  $subscribe: vi.fn(),
}

vi.mock('../../stores/useSearchMedias', () => ({
  useSearchMedias: () => mockStore,
}))

const SearchResultsMock = {
  template: '<div></div>',
  props: ['results', 'showMenu', 'keywords'],
  emits: ['toggle-menu'],
}

describe('Search.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly and performs a search', async () => {
    render(Search, {
      global: {
        components: {
          SearchResults: SearchResultsMock,
        },
      },
    })

    const input = screen.getByPlaceholderText('Search IMDB')
    await fireEvent.update(input, 'Batman')

    expect(mockGetMediasByName).toHaveBeenCalledWith('Batman', 1)
  })

  it('shows the menu when there are search results', async () => {
    mockStore.listMedias = [
      {
        id: 1,
        title: 'Batman',
        overview: 'A superhero movie',
        poster_path: 'path/to/poster',
        media_type: 'movie',
      } as SearchResult,
    ]

    render(Search, {
      global: {
        components: {
          SearchResults: SearchResultsMock,
        },
      },
    })

    const input = screen.getByPlaceholderText('Search IMDB')
    await fireEvent.update(input, 'Batman')

    // Verifica se o menu foi mostrado
    await waitFor(() => {
      expect(screen.getByText('Batman')).toBeInTheDocument()
    })
  })
})
