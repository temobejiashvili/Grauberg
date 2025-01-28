import Image from "next/image";
import Link from "next/link";

import Arrow from "@/public/assets/arrow.svg";

import rectangle from "@/public/assets/images/Rectangle334.webp";
import rectangle1 from "@/public/assets/images/Rectangle3463531.webp";
import maskGroup from "@/public/assets/images/MaskGroup.webp";
import maskGroup1 from "@/public/assets/images/MaskGroup1.webp";
import { TranslateText } from "@/components/translateText/TranslateText";

interface HeaderCatalogProps {
  is900: boolean;
}

const HeaderCatalog = ({ is900 }: HeaderCatalogProps) => {
  return (
    <section className="w-full h-[764px] overflow-hidden max-1300:h-[745px] max-1100:h-[700px] max-900:h-[802px]">
      <div className="w-full h-full relative overflow-hidden">
        {!is900 ? (
          <Image
            src={rectangle}
            alt="coverImage"
            layout="fill"
            style={{ zIndex: "0" }}
            placeholder="blur"
          />
        ) : (
          <Image
            src={rectangle1}
            alt="coverImage"
            layout="fill"
            style={{ zIndex: "0" }}
            placeholder="blur"
          />
        )}
      </div>
      <div className="w-full absolute top-[88px] flex justify-between max-900:flex-col max-900:items-center max-900:gap-[33px]">
        <aside className="pt-[110px] pl-[107px] flex flex-col  max-w-[500px] mr-[30px] max-1100:pl-[80px] max-1100:max-w-[400px] max-900:pt-[0px] max-900:pl-[0px] max-900:max-w-[370px] max-900:mr-[0px]">
          <Link
            href="#"
            className="text-[12px] text-[#FFFFFF] leading-[20px] px-[22px] py-[6px] rounded-[60px] bg-[#5C5C5C] w-fit "
          >
            <TranslateText text="popularBlog" />
          </Link>
          <article className="mt-[32px] mb-[40px] max-900:my-[19px]">
            <h2 className="text-[#F5F5F5] text-[28px] font-bold leading-[34px] max-900:text-[24px] max-900:leading-[32px]">
              <TranslateText text="betonTypes" />
            </h2>
            <p className="text-[#FFFFFF] leading-[26px] mt-[21px] max-900:text-[14px] max-900:leading-[20px]">
              შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
              ემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს დტიპო გრაფ
              იული ნაწარმის შემქმნელებს...
            </p>
          </article>
          <Link
            href="/blog/article"
            className="group bg-[#D6D6D6] flex justify-center items-center rounded-[10px] w-[240px] h-[54px] border-[1px] border-solid border-[#D6D6D6] hover:bg-primary transition-colors text-sm text-darkPrimary hover:text-white max-900:w-full max-1100:mt-[10px] max-900:mt-[0px]"
          >
            <TranslateText text="viewAll" />

            <Arrow className="w-2 object-cover ml-3 group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </Link>
        </aside>
        <aside>
          {!is900 ? (
            <Image
              src={maskGroup}
              alt="coverImage"
              width={752}
              height={676}
              style={{ zIndex: "0" }}
              placeholder="blur"
              className=" max-1300:h-[657px] max-1300:w-[640px] max-1100:w-[560px] max-1100:h-[610px]"
            />
          ) : (
            <Image
              src={maskGroup1}
              alt="coverImage"
              width={371}
              height={327}
              style={{ zIndex: "0" }}
              placeholder="blur"
            />
          )}
        </aside>
      </div>
    </section>
  );
};

export default HeaderCatalog;
