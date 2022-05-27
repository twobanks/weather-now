/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import useSWR, { useSWRConfig } from "swr"
import useDebounce from '../../hooks/useDebounce'
import * as S from './styled'
const loader = '/img/loader.svg'

type Data = {
  name?: string;
}

const DEBOUNCE_TIME = 600000;

const Card = ({ name } : Data) => {
  const API_URL =`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const [update, setUpdate] = useState<string>('');
  const { cache, mutate } = useSWRConfig()
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState(cache.get(API_URL))

  const fetcher = async () => {
    setLoading(true)
    const response = await fetch(API_URL)
    const data = await response.json()
    setCity(data)
    const time = new Date()
    setUpdate(time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true  }))
    setLoading(false)
  }

  const debouncedValue = useDebounce(fetcher, DEBOUNCE_TIME)

  const { error } = useSWR(
    API_URL,
    fetcher,
    { refreshInterval: DEBOUNCE_TIME, 
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false  
    },
    );

  useEffect(() => {
    cache.delete(API_URL)
  },[API_URL, cache, debouncedValue])

  const temp = +city?.main?.temp.toFixed(0)

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
            <span>Updated at {update} </span>
          </S.Footer>
        </>
      )}
    </>
  )

  const renderMessageError = () => (
    <S.WrapperError>
      <span>Something went wrong</span>
      <button type='button' onClick={() => mutate(API_URL)}>Try Again</button>
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