import { render, screen, fireEvent } from '@testing-library/vue'
import Pagination from './Pagination.vue'

describe('Pagination', () => {
  test('renders correctly and handles button clicks', async () => {
    const { emitted } = render(Pagination, {
      props: {
        currentPage: 1,
        totalPages: 5,
      },
    })

    expect(screen.getByText('Anterior')).toBeInTheDocument()
    expect(screen.getByText('Próximo')).toBeInTheDocument()

    await fireEvent.click(screen.getByText('Próximo'))

    const events = emitted()['change-page']
    expect(events).toBeDefined()
    expect(events[0]).toEqual([2])
  })

  test('disables the Next button when on the last page', async () => {
    render(Pagination, {
      props: {
        currentPage: 5,
        totalPages: 5,
      },
    })

    const nextButton = screen.getByText('Próximo')
    expect(nextButton).toBeDisabled()
  })
})
