import styled, { css } from "styled-components";
import { transparentize } from 'polished';

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    border-bottom: 0.1rem solid ${theme.colors.divider};
    box-shadow: ${transparentize(0.9, `${theme.colors.shadow}`)} 0 0 .5rem 0, ${transparentize(0.9, `${theme.colors.shadow}`)} 0 0 .1rem 0;
    height: 7rem;
    width: 100%;
    img { 
      height: 50%;
    }
  `}
`;

