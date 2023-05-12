import { styled } from "styled-components";


export const WizenPrimeLink = styled.a`
  display: flex;
  height: 100%;
  width: 100%;
  user-select: none;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 0.375rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(4, 2, 55, 1) 0%,
    rgba(5, 3, 63, 1) 0%,
    rgba(5, 4, 70, 1) 0%,
    rgba(9, 9, 121, 1) 22%,
    rgba(2, 178, 232, 1) 58%,
    rgba(1, 202, 248, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 1.5rem;
  text-decoration: none;
  outline: none;
  &:focus {
    box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.2);
  }
`

export const InformationBar = styled.div`
  height: 2rem;
  width: 100%;
  background-color: #009ed0;
  color: #f8f8f8;
  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: fixed;
  top: 0;
`

export const DiscountText = styled.span`
  font-weight: bold;
  font-style: italic;
`