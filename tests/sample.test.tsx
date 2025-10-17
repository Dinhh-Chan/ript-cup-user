import { render, screen } from '@testing-library/react'

function Hello() {
  return <div>Xin chao</div>
}

test('renders greeting', () => {
  render(<Hello />)
  expect(screen.getByText('Xin chao')).toBeInTheDocument()
})


