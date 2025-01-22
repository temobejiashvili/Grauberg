import { TranslateText } from "@/components/translateText/TranslateText";
import { blogs } from "@/content/blogsContent";
import dynamic from "next/dynamic";

const dynamicImports = {
  LoaderComponent: dynamic(
    () => import("@/components/loaderComponent/LoaderComponent"),
    { ssr: false, loading: () => <p>Loading...</p> }
  ),
  BlogCard: dynamic(() => import("@/components/blogCard/BlogCard"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }),
};

const Catalog = () => {
  return (
    <>
      <div className="flex relative justify-center h-[1200px] max-1300:h-[1700px] max-900:h-[3300px]">
        <div className="max-w-[1355px] max-1300:max-w-[855px] max-900:max-w-[395px] mx-[40px] max-1400:mx-[20px] flex flex-col gap-[40px] px-[50px] max-1400:px-[30px] absolute top-[-80px] rounded-[40px] max-900:top-[-38px] max-900:gap-[24px]">
          <div className="w-full h-[499px] left-[0px] top-[0xp] absolute bg-gradient-to-t from-white to-gray-100 rounded-[40px] backdrop-blur-[84px] z-[38]"></div>
          <h3 className="text-[#100F0F] text-[36px] font-bold mt-[45px] ml-[5px] z-[39] max-900:text-[24px] max-900:mt-[23px] max-900:ml-[24px]">
            <TranslateText text="allBlogs" />
          </h3>

          <dynamicImports.LoaderComponent>
            <div className="flex justify-center items-center gap-[38px] flex-wrap z-[40] max-900:gap-[26px]">
              {blogs.map((blog, index) => (
                <dynamicImports.BlogCard key={index} {...blog} />
              ))}
            </div>
          </dynamicImports.LoaderComponent>
        </div>
      </div>
      <div className="w-full bg-white h-[140px] rounded-b-60 absolute"></div>
    </>
  );
};

export default Catalog;
