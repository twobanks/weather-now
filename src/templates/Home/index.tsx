import { Card, TopBar } from "../../components";
import { mock } from "./mock";
import * as S from './styled';

const HomeTemplate = () => (
  <S.Wrapper>
    <TopBar />
    <S.Content>
      {mock.map(item => <Card name={item.name} key={item.id} />)}
    </S.Content>
  </S.Wrapper>
)
export default HomeTemplate