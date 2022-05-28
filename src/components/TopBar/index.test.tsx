import { renderWithTheme } from '../../utils/test/render'
import TopBar from '.'

describe('TopBar', () => {
  it('render a logo - WEATHERNOW', () => {
    const { getByAltText } = renderWithTheme(<TopBar />)
    const image = getByAltText('Logo da WEATHERNOW')
    expect(image).toBeInTheDocument();
  })
})