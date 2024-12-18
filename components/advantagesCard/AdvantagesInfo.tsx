import ShopIcon from "../../public/assets/shopIcon.svg";

type advantagesInfoType = {
  title: string;
  info: string;
};

const AdvantagesInfo = ({ title, info }: advantagesInfoType) => {
  return (
    <div className="flex items-center">
      <div className="w-14 min-w-14 shadow-multi flex justify-center items-center h-14 bg-primary rounded-full">
        <ShopIcon width={26} height={26} alt="shop" />
      </div>
      <div className="pl-[29px]">
        <h1 className="font-bold text-2xl pb-[10px] text-darkPrimary">
          {title}
        </h1>
        <p className="text-darkPrimary">{info}</p>
      </div>
    </div>
  );
};

export default AdvantagesInfo;
