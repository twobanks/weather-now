import { renderWithTheme } from '../../utils/test/render'
import TopBar from '.'

describe('TopBar', () => {
  it('render a logo - WEATHERNOW', () => {
    const { container } = renderWithTheme(<TopBar />)
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', '/img/logo.svg');
  })
})