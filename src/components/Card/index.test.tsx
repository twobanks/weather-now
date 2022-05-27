import { renderWithTheme } from '../../utils/test/render'
import Card from '.'
import theme from '../../styles/theme'
import { mock } from './mock'

const fnMock = jest.fn()

describe('Card', () => {
  it('render the loading in Card', async  () => {
    const { container,  } = renderWithTheme(<Card city={mock.nuuk} fetcher={fnMock} loading/>)
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', '/img/loader.svg');
  })

  it('render the temperature with the correctly color', async  () => {
    const { container } = renderWithTheme(<Card city={mock.nuuk} fetcher={fnMock}/>)
    const temperature = container.querySelector('strong');
    expect(temperature).toHaveStyle({
      color: theme.colors.blue
    });
  })

  it('render the name city', async  () => {
    const { getByText } = renderWithTheme(<Card city={mock.nuuk} fetcher={fnMock}/>)
    const cityName = getByText('Nuuk, GL');
    expect(cityName).toBeInTheDocument();
  })

  it('render the pressure and humidity', async  () => {
    const { getByText } = renderWithTheme(<Card city={mock.nuuk} fetcher={fnMock}/>)
    const pressure = getByText('1018hPa');
    const humidity = getByText('10%');
    expect(pressure).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
  })

  it('render the temperature with the correctly color', async  () => {
    const { container } = renderWithTheme(<Card city={mock.urubici} fetcher={fnMock}/>)
    const temperature = container.querySelector('strong');
    expect(temperature).toHaveStyle({
      color: theme.colors.orange
    });
  })

  it('render the temperature with the correctly color', async  () => {
    const { container } = renderWithTheme(<Card city={mock.nairobi} fetcher={fnMock}/>)
    const temperature = container.querySelector('strong');
    expect(temperature).toHaveStyle({
      color: theme.colors.red
    });
  })
})