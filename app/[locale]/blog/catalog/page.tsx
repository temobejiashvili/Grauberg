import BlogCard from "@/components/blogCard/BlogCard";

const blogs = [
  {
    image: "/images/beton.png",
    alt: "betton",
    title: "ბეტონის ტიპები და მათი გამოყენება",
    text: "ბეტონი თანამედროვე არქიტექტურაში და საინჟინრო სფეროში გამორჩეული მასალაა. მისი მდგრადობა, სიმტკიცე და გარემოს მიმა...",
  },
  {
    image: "/images/factory.png",
    alt: "factory",
    title: "ქარხსნის სტანდარტები და მისი უპირატესობები",
    text: "ბეტონის ქარხანა არის წარმოების ობიექტი, სადაც ბეტონი სპეციალური ტექნოლოგიით მზადდება და სხვადასხვა სამშენებლო პროე...",
  },
  {
    image: "/assets/images/wall.png",
    alt: "betton",
    title: "როგორ გამოვიყენოთ ცემენტი სწორად",
    text: "ცემენტის სწორად გამოყენება მშენებლობაში დიდ მნიშვნელობას ატარებს, რადგან ის განსაზღვრავს საბოლოო სტრუქტურის სიმტ...",
  },
  {
    image: "/assets/images/building.png",
    alt: "building",
    title: "ჩვენი ბეტონის ხარისხით განმტკიცებული ბინები",
    text: "ქარხანაში ხდება ბეტონის ყველა საჭირო ინგრედიენტის, მათ შორის ცემენტის, ქვიშისა და წყლის, ზუსტი პროპორციებით შერევა ...",
  },
  {
    image: "/assets/images/image431.png",
    alt: "betton",
    title: "ბეტონის სიძლიერე და ცემენტის როლი",
    text: "ბეტონი თავისი სიმტკიცითა და მდგრადობით გამოირჩევა, რაც მნიშვნელოვან როლს თამაშობს სხვადასხვა სტრუქტურის მშენ...",
  },
  {
    image: "/assets/images/image432.png",
    alt: "betton",
    title: "უსაფთხოება მშენებლობის პროცესში",
    text: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო გრაფ იული ნაწარმის შემქმნელებს...",
  },
];

const Catalog = () => {
  return (
    <>
      <div className="flex relative justify-center h-[1200px] max-1300:h-[1700px] max-900:h-[3300px]">
        <div className="max-w-[1355px] max-1300:max-w-[855px] max-900:max-w-[395px] mx-[40px] max-1400:mx-[20px] flex flex-col gap-[40px] px-[50px] max-1400:px-[30px] absolute top-[-80px] rounded-[40px] max-900:top-[-38px] max-900:gap-[24px]">
          <div className="w-full h-[499px] left-[0px] top-[0xp] absolute bg-gradient-to-t from-white to-gray-100 rounded-[40px] backdrop-blur-[84px] z-[38]"></div>
          <h3 className="text-[#100F0F] text-[36px] font-bold mt-[45px] ml-[5px] z-[39] max-900:text-[24px] max-900:mt-[23px] max-900:ml-[24px]">
            ყველა ბლოგები
          </h3>

          <div className="flex justify-center items-center gap-[38px] flex-wrap z-[40] max-900:gap-[26px]">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                alt={blog.alt}
                title={blog.title}
                text={blog.text}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-[140px] rounded-b-60 absolute"></div>
    </>
  );
};

export default Catalog;
