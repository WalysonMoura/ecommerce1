"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { siteConfig } from "@/config/site";

export default function SliderBanners() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {siteConfig.banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link href={banner.href}>
              <Image
                src={`/images/banners/${banner.name}`}
                width={1000}
                height={1000}
                alt={banner.name|| "Banner image"}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
