import dynamic from "next/dynamic";
import Link from "next/link";
import { TranslateText } from "../../translateText/TranslateText";

const HeaderProductItem = dynamic(() => import("./HeaderProductItem"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface HeaderNavListPropsTypes {
  link: { href: string; label: string };
  index: number;
  isHeaderImageInView: boolean;
  isWhite: boolean;
  pathname: string;
}

const HeaderNavList = ({
  link,
  index,
  isHeaderImageInView,
  isWhite,
  pathname,
}: HeaderNavListPropsTypes) => {
  return link.label === "products" ? (
    <HeaderProductItem
      key={index}
      isHeaderImageInView={isHeaderImageInView}
      isWhite={isWhite}
      isSamePath={pathname === link.href}
      link={link}
    />
  ) : (
    <li key={index} className="relative group">
      <Link
        href={link.href}
        replace={true}
        locale={false}
        className={`${
          !isHeaderImageInView || isWhite ? "text-[#100F0F]" : "text-[#FFFFFF]"
        } ${
          pathname === link.href
            ? "border-solid border-b-[1px] border-[#D6D6D6] pb-[7px]"
            : "hover:border-solid hover:border-b-[1px] hover:border-[#ee2e24] hover:pb-[7px]"
        }`}
      >
        <TranslateText text={link.label} />
      </Link>
    </li>
  );
};

export default HeaderNavList;
