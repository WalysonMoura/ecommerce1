"use client"

import { CardProduct } from "../CardProduct"
import * as Style from "./styles"
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function ProductSlides() {
  return (
    <Style.SlidesContainer
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
    >
      <CardProduct key="" />
      <CardProduct key="" />
      <CardProduct key="" />
      <CardProduct key="" />
      <CardProduct key="" />
      <CardProduct key="" />
      <CardProduct key="" />
    </Style.SlidesContainer>
  )
}
