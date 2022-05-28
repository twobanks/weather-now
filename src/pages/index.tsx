import type { NextPage } from 'next'
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import HomeTemplate from '../templates/Home'
import { Weather } from '../types/weather';
import { API_URL } from '../utils/constant/weather'

const DEBOUNCE_TIME = 600000;

const Home: NextPage = () => {
  const [update, setUpdate] = useState<string>('')
  const { cache } = useSWRConfig()
  const [loading, setLoading] = useState<boolean>(false)
  const [cities, setCities] = useState<{cnt: number, list: Weather[]}>(cache.get(API_URL))

  const fetcher = async () => {
    setLoading(true)
    const response = await fetch(API_URL)
    const data = await response.json()
    setCities(data)
    const time = new Date()
    setUpdate(time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true  }))
    setLoading(false)
  }

  const { error } = useSWR(
    API_URL,
    fetcher,
    { refreshInterval: DEBOUNCE_TIME, 
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false  
    },
    );

  return <HomeTemplate update={update} error={error} loading={loading} cities={cities} fetcher={fetcher} />
}

export default Home
