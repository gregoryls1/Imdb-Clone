import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import Card from './Card.vue'

const BaseIconMock = {
  template: '<div></div>',
}

describe('Card.vue', () => {
  it('renders fallback icon when img prop is not provided', () => {
    render(Card, {
      props: {
        name: 'La Casa dos Famosos México',
        date: '2023-08-15',
        img: null,
        vote: 8.7,
      },
      global: {
        stubs: {
          BaseIcon: BaseIconMock,
        },
      },
    })

    const fallbackIcon = screen.getByTestId('fallback-icon')
    expect(fallbackIcon).toBeInTheDocument()
  })

  it('displays the correct name, date, and vote', () => {
    render(Card, {
      props: {
        name: 'La Casa dos Famosos México',
        date: '2023-08-15',
        img: 'path/to/image.jpg',
        vote: 8.7,
      },
      global: {
        stubs: {
          BaseIcon: BaseIconMock,
        },
      },
    })

    expect(screen.getByText('La Casa dos Famosos México')).toBeInTheDocument()
    expect(screen.getByText('2023-08-15')).toBeInTheDocument()
    expect(screen.getByText('8.7')).toBeInTheDocument()
  })
})
