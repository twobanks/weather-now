import { Card, TopBar } from "../../components";
import { Home, Weather } from "../../types/weather";
import * as S from './styled';

type HomeProps = {
  cities: {
    cnt: number;
    list: Weather[]
  }
} & Home;

const HomeTemplate = ({ update, loading, error, cities, fetcher }: HomeProps) => (
  <S.Wrapper>
    <TopBar />
    <S.Content>
      {cities?.list?.map(city => <Card city={city} key={city.id} update={update} error={error} loading={loading} fetcher={fetcher} />)}
    </S.Content>
  </S.Wrapper>
)
export default HomeTemplate