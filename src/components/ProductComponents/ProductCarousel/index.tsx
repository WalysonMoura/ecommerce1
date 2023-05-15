"use client"

import { CardProduct } from "../CardProduct"
import * as Style from "./styles"
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Key } from "react";

export function ProductSlides({ products }: any) {
  return (
    <Style.SlidesContainer
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
    >
      {products.map((product: { id: Key | null | undefined; }) => (
        <SwiperSlide key={product.id}>
          <CardProduct produto={product} />
        </SwiperSlide>
      ))}
    </Style.SlidesContainer>
  )
}
