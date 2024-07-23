"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

type TArgs = {
  selectedOption: { name: string; imageUrl: string; alt: string };
  handleSelect: (arg: string) => void;
  options: { name: string; value: string }[];
  bgAndTextColor: string;
};

export const CustomSelect = ({
  selectedOption,
  handleSelect,
  options,
  bgAndTextColor,
}: TArgs) => {
  const [showOptions, setShowOptions] = useState(false);
  const selectRef: RefObject<HTMLDivElement> = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={selectRef}>
      <div className="w-40 md:w-auto">
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className={`flex justify-center gap-[2px] items-center w-[147px] md:w-[100px] h-14  rounded-lg  shadow-sm px-1 ${bgAndTextColor} text-sm font-medium `}
            onClick={() => setShowOptions(!showOptions)}
          >
            <Image
              src={selectedOption.imageUrl}
              alt={selectedOption.alt}
              width={22}
              height={22}
              className="rounded-full"
            />
            {selectedOption.name}
            {showOptions ? (
              <IoIosArrowUp className="text-xl " />
            ) : (
              <IoIosArrowDown className="text-xl " />
            )}
          </button>
        </span>
      </div>
      {showOptions && (
        <div className="origin-top-right absolute right-[-60px] md:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={(e) => handleSelect(option.value)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
