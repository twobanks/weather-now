import styled, { css, DefaultTheme } from "styled-components";
import { transparentize } from 'polished';

type CardStyle = {
  temperature?: number;
  error?: boolean;
}

enum TEMPERATURE {
  COLD= 'COLD',
  NORMAL= 'NORMAL',
  HOT= 'HOT'
}

const tempModifier = {
  [TEMPERATURE.COLD]: (theme: DefaultTheme) => css`
    color: ${theme.colors.blue};
  `,
  [TEMPERATURE.NORMAL]: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange};
  `,
  [TEMPERATURE.HOT]: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `,
}

export const Wrapper = styled.div<CardStyle>`
  ${({ theme, error }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    height: 30rem;
    background-color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;
    box-shadow: ${transparentize(0.9, `${theme.colors.shadow}`)} 0 0 .5rem 0, ${transparentize(0.9, `${theme.colors.shadow}`)} 0 0 .1rem 0;
    ${!error && css`
      &:hover {
        height: 35rem;
        div:last-child div {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }
      }
    `}
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    border-bottom: 0.1rem solid ${theme.colors.divider};
    font-size: ${theme.font.sizes.s18};
  `}
`;



export const Content = styled.div<CardStyle>`
  ${({ theme, temperature = 0 }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: ${theme.font.sizes.s80};
    strong {
      ${temperature <= 5 && tempModifier[TEMPERATURE.COLD](theme)}
      ${temperature > 5  && tempModifier[TEMPERATURE.NORMAL](theme)}
      ${temperature >= 26 && tempModifier[TEMPERATURE.HOT](theme)}
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    background-color: ${transparentize(0.5, `${theme.colors.background}`)};
    width: 100%;
    text-align: center;
    font-size: ${theme.font.sizes.s12};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      display: none;
    }
    
  `}
`;

export const Data = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    div {
      display: flex;
      flex-direction: column;
      line-height: 2rem;
    }
    color: ${theme.colors.secondary};
    em {
      font-style: normal;
      font-size: 1.8rem;
      color: ${theme.colors.shadow};
    }
  `}
`

export const WrapperLoading = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const WrapperError = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 2rem;
    span {
      color: ${theme.colors.red};
      font-size: ${theme.font.sizes.s16};
      font-weight: ${theme.font.bold};
    }
    button {
      cursor: pointer;
      background-color: ${theme.colors.none};
      border: 0.15rem solid ${theme.colors.primary};
      outline: 0;
      color: ${theme.colors.primary};
      padding: 1rem 2rem;
      border-radius: 5rem;
    }
  `}
`