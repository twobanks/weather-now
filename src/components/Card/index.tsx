/* eslint-disable @next/next/no-img-element */
import {  Home, Weather } from '../../types/weather'
import * as S from './styled'
const loader = '/img/loader.svg'

type CardProps = {
  city: Weather;
} & Home;

const Card = ({ update, loading, error, city, fetcher }: CardProps) => {
  const temperature = +city?.main?.temp.toFixed(0)
  const renderLoading = () => (
    <S.WrapperLoading>
      <img src={loader} alt="Círculo girando ilustrando um loader."/>
    </S.WrapperLoading>
  )

  const renderContent = () => (
    <>
      <S.Content temperature={temperature}> {loading ? renderLoading() : <strong>{temperature}°</strong>}</S.Content> 
      <S.Footer>
        <S.Data>
          <div>
            <span>HUMIDITY</span>
            <em>{city?.main?.humidity}%</em>
          </div>
          <div>
            <span>PRESSURE</span>
            <em>{city?.main?.pressure}hPa</em>
          </div>
        </S.Data>
        <span>Updated at {update} </span>
      </S.Footer>
    </>
  )

  const renderMessageError = () => (
    <S.WrapperError>
      <span>Something went wrong</span>
      <button type='button' onClick={() => fetcher()}>Try Again</button>
    </S.WrapperError>
  )

  return (
    <S.Wrapper error={error}>
      <S.Header>{city?.name}, {city?.sys?.country}</S.Header>
      {error ? renderMessageError() : renderContent()}
    </S.Wrapper>
  )
}

export default Card