import { render, screen } from '@testing-library/vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import Header from './Header.vue'
import BaseIcon from '../Icons/BaseIcon.vue'
import Search from '../Search/Search.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/', component: {} }],
})

const pinia = createPinia()
setActivePinia(pinia)

describe('Header.vue', () => {
  it('renders ImdbIcon correctly', () => {
    render(Header, {
      global: {
        plugins: [router, pinia],
        components: { BaseIcon, Search },
      },
    })

    const iconElement = screen.getByTestId('logo_header')
    expect(iconElement).toBeInTheDocument()
  })

  it('renders Search component correctly', () => {
    render(Header, {
      global: {
        plugins: [router, pinia],
        components: { BaseIcon, Search },
      },
    })

    const searchInput = screen.getByPlaceholderText('Search IMDB')
    expect(searchInput).toBeInTheDocument()
  })
})
