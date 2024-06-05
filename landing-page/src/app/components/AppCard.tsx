// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import AppBtn from "./AppBtn";

// function Card({ image, title, details }: any) {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh(); 
//   }, []);

  
//   return (
//     <div
//       className="app_card bg-white shadow-md rounded-xl overflow-hidden p-5"
//       data-aos="zoom-in-up"
//       data-aos-duration="3000"
//     >
//       <div className="w-full h-64 relative">
//         <Image
//           src={image}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-xl"
//         />
//       </div>
//       <div className="p-4">
//         <h1 className="text-2xl font-bold">{title}</h1>
//         <p className="mt-2 text-gray-600 italic">{details}</p>
//         <div className="mt-2">
//           <AppBtn label="Order Now"/>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AppCard() {
//   const data = [
//     {
//       image: "/45.jpg",
//       title: "Cheese Pizza",
//       details:
//         "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
//     },
//     {
//       image: "/7777.jpg",
//       title: "Pepperoni Pizza",
//       details:
//         "Get our classic Pepperoni pizza with your choice of sauce and crust.",
//     },
//     {
//       image: "/p1.jpg",
//       title: "Cheese Pizza",
//       details:
//         "Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.",
//     },
//     {
//       image: "/rrr.jpg",
//       title: "Rustica Pizza",
//       details:
//         "Tomato sauce, mozzarella, sausage, crispy bacon, roasted red peppers, and black olives.",
//     },
//     {
//       image: "/899.jpg",
//       title: "Delicious Pizza",
//       details:
//         "A mix of Porcini Mushrooms and Decadent Truffle Paste, Mozzarella, Fresh Mushrooms, Caramelized Onions.",
//     },
//     {
//       image: "/jkjkkk.jpg",
//       title: "Tomato Pizza",
//       details:
//         "The Classic Marinara Sauce, Roma Tomatoes, Fresh Mozzarella, Fresh Basil, and an Extra Virgin Olive Oil drizzle.",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
//       {data.map((item, index) => (
//         <Card key={index} {...item} />
//       ))}
//     </div>
//   );
// }

// export default AppCard;

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import AppBtn from "./AppBtn";
import { useRouter } from 'next/navigation';

interface CardProps {
  image: string;
  title: string;
  details: string;
}

function Card({ image, title, details }: CardProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleOrderNow = () => {
    const orderId = Math.random().toString(36).substr(2, 9);
    localStorage.setItem("orderId", orderId);
    router.push(`/order/${orderId}`);
  };

  return (
    <div
      className="app_card bg-white shadow-md rounded-xl overflow-hidden p-5"
      data-aos="zoom-in-up"
      data-aos-duration="3000"
    >
      <div className="w-full h-64 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-600 italic">{details}</p>
        <div className="mt-2">
          <AppBtn label="Order Now" onClick={handleOrderNow} />
        </div>
      </div>
    </div>
  );
}

function AppCard() {
  const data = [
    {
      id: 1,
      image: "/45.jpg",
      title: "Cheese Pizza",
      details:
        "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
    },
    {
      id: 2,
      image: "/7777.jpg",
      title: "Pepperoni Pizza",
      details:
        "Get our classic Pepperoni pizza with your choice of sauce and crust.",
    },
    {
      id: 3,
      image: "/p1.jpg",
      title: "Cheese Pizza",
      details:
        "Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.",
    },
    {
      id: 4,
      image: "/rrr.jpg",
      title: "Rustica Pizza",
      details:
        "Tomato sauce, mozzarella, sausage, crispy bacon, roasted red peppers, and black olives.",
    },
    {
      id: 5,
      image: "/899.jpg",
      title: "Delicious Pizza",
      details:
        "A mix of Porcini Mushrooms and Decadent Truffle Paste, Mozzarella, Fresh Mushrooms, Caramelized Onions.",
    },
    {
      id: 6,
      image: "/jkjkkk.jpg",
      title: "Tomato Pizza",
      details:
        "The Classic Marinara Sauce, Roma Tomatoes, Fresh Mozzarella, Fresh Basil, and an Extra Virgin Olive Oil drizzle.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default AppCard;
