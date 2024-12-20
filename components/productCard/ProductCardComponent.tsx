import React from "react";
import Image from "next/image";
import Truck from "../../public/images/truck.png";

type ProductCardProps = {
  isCement?: boolean;
};

const ProductCardComponent = ({ isCement }: ProductCardProps) => {
  const title = isCement ? "პორტლანდცემენტი" : "მაღალი სიმტკიცის ბეტონი";
  const info = isCement
    ? "ყველაზე გავრცელებული ცემენტის ტიპი, რომელიც მრავალ სამშენებლო პროექტში გამოიყენება."
    : "აქვს განსაკუთრებული გამძლეობა და გამოიყენება მრავალ ინფრასტრუქტურულ პროქტებში";
  return (
    <div className="max-w-xl cursor-pointer relative h-513 bg-backgroundGrey rounded-30 shadow-md  border border-gray-200">
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-30">
        <div className=" w-full h-[284px] px-6">
          {isCement ? (
            <Image
              width={211}
              height={320}
              src={"/images/cement.png"}
              alt="Cement"
              className="w-[211px]
               drop-shadow-[-20px_14px_94px_rgba(0,0,0,0.45)] 
               rotate-[-3.76deg] h-[320px] max-h-[320px] absolute
                top-[-40px] left-1/2 -translate-x-[105px]"
            />
          ) : (
            <Image
              width={100}
              height={100}
              src={"/images/truck.png"}
              alt="Concrete Mixer Truck"
              className="w-full h-auto max-h-284"
            />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-12 text-center gap-2 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-28 font-bold w-full">{title}</h2>

        {/* Description */}
        <p className="text-darkSecondary flex text-baseHigh max-w-[421px]">
          {info}
        </p>
        <a
          href="/products"
          className="flex justify-center w-58 h-58 absolute bottom-5 right-5"
        >
          {/* <button className="bg-red-500 w-14 h-14 rounded-full hover:bg-red-600 text-white p-2 rounded-full">
              →
            </button> */}
          <Image
            src={"/assets/productArrow.svg"}
            height={58}
            width={58}
            alt=">"
          />
        </a>

        {/* Button */}
      </div>
    </div>
  );
};

export default ProductCardComponent;
