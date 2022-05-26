/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import * as S from './styled'
import useDebounce from '../../hooks/useDebounce'
const API_KEY = 'b084eb8df2affa506829ff3e41a23e57'
const loader = '/img/loader.svg'

type Data = {
  name: string;
}

type WeatherProps = {
  main: {
    humidity: number;
    pressure: number;
    temp: number;
  }
  name: string;
  sys: {
    country: string;
  }
}

const weatherEmpty = {
  main: {
    humidity: 0,
    pressure: 0,
    temp: 0,
  },
  name: '',
  sys: {
    country: '',
  }
}

const DEBOUNCED_TIME = 600000;

const Card = ({ name } : Data) => {
  const BASE_URL =`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`;
  const [city, setCity] = useState<WeatherProps>(weatherEmpty);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(city.name, DEBOUNCED_TIME)
  const temp = +city?.main?.temp.toFixed(0)
  

  useEffect(() => {
    const fetchApi = async() =>
    {
        setLoading(true)
        const response = await fetch(BASE_URL);
        if (response.ok) {
          const resJson = await response.json();
          setCity(resJson);
        } else {
          setError(true)
        }
        setLoading(false)
    }
    fetchApi();
  },[name,  BASE_URL, debouncedValue])

  const renderLoading = () => (
    <S.WrapperLoading>
      <img src={loader} alt="Circulo girando ilustrando um loader."/>
    </S.WrapperLoading>
  )

  const renderContent = () => (
    <>
      {loading ? renderLoading() : (
        <>
          <S.Content temperature={temp}> {loading ? renderLoading() : <>{temp}°</>}</S.Content> 
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
            <span>Updated at - - - </span>
          </S.Footer>
        </>
      )}
    </>
  )

  const renderMessageError = () => (
    <S.WrapperError>
      <span>Something went wrong</span>
      <button type='button'>Try Again</button>
    </S.WrapperError>
  )

  return (
    <S.Wrapper error={error}>
      <S.Header>{name}</S.Header>
      {error ? renderMessageError() : renderContent()}
    </S.Wrapper>
  )
}

export default Card