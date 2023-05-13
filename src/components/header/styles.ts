import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  border-bottom: 1px solid;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Container = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 640px) {
    justify-content: flex-start;
    gap: 0;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`
