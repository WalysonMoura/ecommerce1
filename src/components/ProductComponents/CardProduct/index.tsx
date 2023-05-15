"use client"

import * as Style from "./styles"

export function CardProduct({ product }) {
  return (
    <Style.CardProductContainer>
      <Style.SlideImage
        src={`/images/products/caneca.jpg`}
        width={1000}
        height={1000}
        alt="caneca"
      />
      <div>
        <Style.TitleProduct>Caneca Naruto</Style.TitleProduct>
        <Style.PriceProduct>R$ 1.079,89</Style.PriceProduct>
      </div>
    </Style.CardProductContainer>
  )
}
