"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AppBtn from "./components/AppBtn";
import anime from "animejs";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiThreeLeaves, GiPizzaCutter, GiNoodles } from "react-icons/gi";
import AppCard from "./components/AppCard";
import AppAccordion from "./components/AppAccordion";
import AppCarousel from "./components/AppCarousel";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); // Refresh AOS on component updates
  }, []);

  useEffect(() => {
    const textWrapper: any = document.querySelector(".ml3");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml3 .letter",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el: any, i: any) => 150 * (i + 1),
        })
        .add({
          targets: ".ml3",
          opacity: 0,
          duration: 100,
          easing: "easeOutExpo",
          delay: 100,
        });
    }
  }, []);

  return (
    <>
      {/* Section 1 */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            alt="Background image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50 p-4">
          <div
            className="p-3 w-full sm:w-full md:w-9/10 lg:w-[70%]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="ml3 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome to Our Pizza Place
            </h1>
            <p className="mt-4 text-md sm:text-md md:text-lg lg:text-xl text-gray-300">
              Enjoy the finest pizza, made with fresh ingredients and a passion
              for quality. Choose from a variety of delicious toppings and
              styles. Taste the difference!
            </p>
            <AppBtn label="VIEW MENU" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section_2">
        <div className="container p-10 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* About Us */}
            <div
              className="border-2 border-red-500 rounded-xl flex justify-center items-center py-5 hover:bg-red-500 hover:text-white text-red-500 transition-all duration-500 shadow-xl"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
            >
              <div>
                <div className="text-6xl flex justify-center items-center">
                  <FaPizzaSlice />
                </div>
                <div>
                  <Link href="/about">
                  <h1 className="mt-5 text-xl">ABOUT US</h1>
                  </Link>
                </div>
              </div>
            </div>

            {/* Organic */}
            <div
              className="border-2 border-red-500 rounded-xl flex justify-center items-center py-5 hover:bg-red-500 hover:text-white text-red-500 transition-all duration-500 shadow-xl"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
            >
              <div>
                <div className="text-6xl flex justify-center items-center">
                  <GiThreeLeaves />
                </div>
                <div>
                  <Link href="/about">
                  <h1 className="mt-5 text-xl">ORGANIC</h1>
                  </Link>                

                    
                </div>
              </div>
            </div>

            {/* Pizza */}
            <div
              className="border-2 border-red-500 rounded-xl flex justify-center items-center py-5 hover:bg-red-500 hover:text-white text-red-500 transition-all duration-500 shadow-xl"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
            >
              <div>
                <div className="text-6xl flex justify-center items-center">
                  <GiPizzaCutter />
                </div>
                <div>
                  <Link href="/about">
                  <h1 className="mt-5 text-xl">PIZZA</h1>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pasta */}
            <div
              className="border-2 border-red-500 rounded-xl flex justify-center items-center py-5 hover:bg-red-500 hover:text-white text-red-500 transition-all duration-500 shadow-xl"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
            >
              <div>
                <div className="text-6xl flex justify-center items-center">
                  <GiNoodles />
                </div>
                <div>
                  <Link href="/about">
                  <h1 className="mt-5 text-xl">PASTA</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image and Text */}
        <div className="container p-4 sm:p-4 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Image */}
            <div
              className="relative w-full h-96"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <Image
                src="/7777.jpg"
                alt="section 2"
                quality={100}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>

            {/* Text */}
            <div
              className="text-center p-5"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
            >
              <p className="text-gray-900 font-semibold text-xl tracking-wide">
                WELCOME TO
              </p>
              <h1 className="font-bold text-gray-900 text-4xl py-5">
                John's Pizzeria
              </h1>
              <p className="text-gray-500 text-lg py-2">
                We are specialized in authentic Neapolitan pizza, baked hot and
                fast in a brick oven to achieve a not-too-thick, not-to-thin
                chewy, smoky crust, made from a recipe that’s been handed down
                through five generations of pizzaioli (pizza makers).{" "}
              </p>
              <div className="my-2">
                <p className="                text-gray-900 font-semibold text-lg">
                  Tasty, fresh daily
                </p>
                <p className="text-gray-900 font-semibold text-lg">
                  Best pizza in NYC
                </p>
              </div>
              <div className="my-3">
                <AppBtn label="SEE OUR MENU" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section_3 bg-slate-900">
        <div className="container p-5 sm:p-5 lg:p-12">
          <div data-aos="zoom-in-up" data-aos-duration="3000">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              Italy Pizza Menu
            </h1>
          </div>
          <div className="m-0 sm:m-0 md:m-5 lg:m-5 my-12">
            <AppCard />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section_4">
        <div className="container p-5 sm:p-5 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Accordion */}
            <div>
              <div data-aos="zoom-in-up" data-aos-duration="3000">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sarif">
                  The taste of Italy
                </h1>
              </div>
              <div
                className="my-12"
                data-aos="zoom-in-up"
                data-aos-duration="3000"
              >
                <AppAccordion />
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Image 1 */}
              <div
                className="relative w-full h-64"
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                <Image
                  src="/f3.jpg"
                  alt="others image"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-xl"
                />
              </div>
              {/* Image 2 */}
              <div
                className="relative w-full h-64"
                data-aos="flip-right"
                data-aos-duration="3000"
              >
                <Image
                  src="/33.jpg"
                  alt="others image"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-xl"
                />
              </div>
              {/* Image 3 */}
              <div
                className="relative w-full h-64"
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                <Image
                  src="/4.jpg"
                  alt="others image"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-xl"
                />
              </div>
              {/* Image 4 */}
              <div
                className="relative w-full h-64"
                data-aos="flip-right"
                data-aos-duration="3000"
              >
                <Image
                  src="/35.jpg"
                  alt="others image"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="section_5 relative w-full ">
        <div className="absolute inset-0">
          <Image
            src="/r3-min.jpg"
            alt="Background2 image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
          <div
            className="relative z-10  text-white bg-black bg-opacity-80 px-10 py-5 rounded-xl"
            data-aos="flip-left"
            data-aos-duration="3000"
          >
            <div className="my-4">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold italic ">
                Pizza
              </h1>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-bold my-1">NEW YORK</h3>
              <p className="text-lg my-1 font-light italic">
                Classic New York style thin crust
              </p>
              <p className="text-lg my-1">
                Medium 14" <span className="font-bold">$19</span>
              </p>
              <p className="text-lg my-1">
                Large 16" <span>$21</span>
              </p>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-bold my-1">Deep Dish Pan</h3>
              <p className="text-lg my-1 font-light italic">
                Thick crust pan pizza
              </p>
              <p className="text-lg my-1">
                Medium 14" <span className="font-bold">$21</span>
              </p>
              <p className="text-lg my-1">
                Large 16" <span className="font-bold">$23</span>
              </p>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-bold my-1">Sicilian</h3>
              <p className="text-lg my-1 font-light italic">
                Square deep dish with our housemade onion
              </p>
              <p className="text-lg my-1">tomato sauce</p>
              <p className="font-bold my-1">$26</p>
            </div>
          </div>

          <div
            className="relative z-10  text-white bg-black bg-opacity-80 px-10 py-5 rounded-xl"
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <div className="my-4">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold italic ">
                Specialty Piz​​​za
              </h1>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-bold my-1">NEW YORK</h3>
              <p className="text-lg my-1 font-light italic">
                Classic New York style thin crust
              </p>
              <p className="text-lg my-1">
                Medium 14" <span className="font-bold">$19</span>
              </p>
              <p className="text-lg my-1">
                Large 16" <span>$21</span>
              </p>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-bold my-1">Deep Dish Pan</h3>
              <p className="text-lg my-1 font-light italic">
                Thick crust pan pizza
              </p>
              <p className="text-lg my-1">
                Medium 14" <span className="font-bold">$21</span>
              </p>
              <p className="text-lg my-1">
                Large 16" <span className="font-bold">$23</span>
              </p>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-bold my-1">Sicilian</h3>
              <p className="text-lg my-1 font-light italic">
                Square deep dish with our housemade onion
              </p>
              <p className="text-lg my-1">tomato sauce</p>
              <p className="font-bold my-1">$26</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className="section_6 m-6">
        <div className="container p-5 sm:p-5 lg:p-12">
          <div className="flex justify-center items-center">
            <div className="w-[100%] sm:w-[100%] lg:w-[70%]  text-center">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-5">
                Satisfy Your Pizza Cravings Today!
              </h1>
              <p className="text-xl font-light">
                Stop by and find out what all the buzz is about. Order your
                favorites today or visit our restaurant to create your ideal
                pizza!
              </p>
            </div>
          </div>

          <div className="">
            <AppCarousel />
          </div>
        </div>
      </div>

      {/* section 7 */}
      <div className="footer bg-slate-900 h-[200px] flex justify-center items-center">
        <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
          Footer
        </h1>
      </div>
    </>
  );
}
