export type Weather = {
  name: string;
  id: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  }
  sys: {
    country: string;
  }
}

export type Home = {
  update?: string;
  loading?: boolean;
  error?: boolean;
  fetcher: () => Promise<void>;
}