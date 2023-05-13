import { styled } from "styled-components"

export const InformationBar = styled.div`
  height: 1.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  color: #f8f8f8;
  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`

export const DiscountText = styled.span`
  font-weight: bold;
  font-style: italic;
`