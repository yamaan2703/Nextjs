import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./AppCarousel.css"

function AppCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="custom-slick p-1">
        <div className="relative h-64 w-full px-2">
          <Image
            src="/4.jpg"
            alt="slider1 image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-64 w-full px-2">
          <Image
            src="/33.jpg"
            alt="slider2 image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-64 w-full px-2">
          <Image
            src="/35.jpg"
            alt="slider3 image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-64 w-full px-2">
          <Image
            src="/45.jpg"
            alt="slider4 image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-64 w-full px-2">
          <Image
            src="/52.jpg"
            alt="slider5 image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-64 w-full px-2">
          <Image
            src="/74.jpg"
            alt="slider6 image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-64 w-full px-2">
          <Image
            src="/899.jpg"
            alt="slider7 image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative h-64 w-full px-2">
          <Image
            src="/7777.jpg"
            alt="slider8 image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default AppCarousel;
