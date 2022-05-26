
import styled from "styled-components";
import media from 'styled-media-query';

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  ${media.lessThan("medium")`
    height: auto;
  `}
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 7rem;
  gap: 2rem;
  padding: 0 2rem;  
  ${media.lessThan("medium")`
    flex-direction: column;
    margin: 10rem 0 5rem 0;
  `}
`