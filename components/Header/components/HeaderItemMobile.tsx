import Image from "next/image";
import Link from "next/link";
import { LinkType } from "./HeaderTypes";
import { TranslateText } from "@/components/translateText/TranslateText";

interface ItemMobileProps {
  link: LinkType;
  index: number;
  closeMenu: () => void;
  pathname: string;
}

const HeaderItemMobile = ({
  link,
  index,
  closeMenu,
  pathname,
}: ItemMobileProps) => {
  return (
    <li key={index} className="flex justify-between items-center">
      <Link
        href={link.href}
        className={`text-[#FFFFFF] text-[20px] font-medium leading-[37px] ${
          pathname === link.href
            ? "border-solid border-b-[1px] border-[#D6D6D6] "
            : ""
        }`}
        onClick={closeMenu}
      >
        <TranslateText text={link.label} />
      </Link>
      <Image src="/assets/arrowRight.svg" alt="Logo" width={17} height={1} />
    </li>
  );
};

export default HeaderItemMobile;
