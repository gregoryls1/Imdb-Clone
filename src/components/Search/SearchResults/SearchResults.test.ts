import { render, screen } from '@testing-library/vue'
import { vi } from 'vitest'
import SearchResults from './SearchResults.vue'
import { SearchResult } from '../../../types/SearchResult'
import { RouterLinkStub } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/search', component: { template: '<div>Search Page</div>' } },
    { path: '/movie/:id', component: { template: '<div>Movie Page</div>' } },
    { path: '/tv/:id', component: { template: '<div>TV Page</div>' } },
  ],
})

const BaseIconMock = {
  template: '<div></div>',
}

describe('SearchResults.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders results correctly when showMenu is true', async () => {
    const results = [
      {
        id: 1,
        title: 'Batman',
        overview: 'A superhero movie',
        poster_path: 'path/to/poster',
        media_type: 'movie',
      },
    ]

    render(SearchResults, {
      props: {
        showMenu: true,
        results,
        keywords: 'Batman',
      },
      global: {
        stubs: {
          BaseIcon: BaseIconMock,
          RouterLink: RouterLinkStub,
        },
        plugins: [router],
      },
    })

    expect(screen.getByText('Batman')).toBeInTheDocument()
    expect(screen.getByText('A superhero movie')).toBeInTheDocument()
  })

  it('shows "See all results for" link', async () => {
    const results: SearchResult[] = []

    render(SearchResults, {
      props: {
        showMenu: true,
        results,
        keywords: 'Batman',
      },
      global: {
        stubs: {
          BaseIcon: BaseIconMock,
          RouterLink: RouterLinkStub,
        },
        plugins: [router],
      },
    })

    expect(screen.getByText('See all results for "Batman"')).toBeInTheDocument()
  })
})
