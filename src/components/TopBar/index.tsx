/* eslint-disable @next/next/no-img-element */
import * as S from './styled'
const logo = '/img/logo.svg'

const TopBar = () => (
  <S.Header>
    <img src={logo} alt="WEATHERNOW" />
  </S.Header>
)

export default TopBar;