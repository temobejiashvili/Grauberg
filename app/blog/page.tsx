"use client";
import { FC } from "react";
import Image from "next/image";
import BlogSection from "@/components/blogSection/BlogComponent";

const icons = [
  {
    src: "/assets/icons/fbIcon.svg",
    alt: "Facebook Logo",
    width: 9.6,
    height: 18.4,
  },
  {
    src: "/assets/icons/instIcon.svg",
    alt: "Instagram Logo",
    width: 19.2,
    height: 19.11,
  },
  {
    src: "/assets/icons/telegramIcon.svg",
    alt: "Telegram Logo",
    width: 19.74,
    height: 17.73,
  },
  {
    src: "/assets/icons/linkedIcon.svg",
    alt: "LinkedIn Logo",
    width: 16.56,
    height: 15.84,
  },
];

type SocialIconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const SocialIcon: FC<SocialIconProps> = ({ src, alt, width, height }) => (
  <div className="w-[48px] h-[48px] flex justify-center items-center border-solid border-[1px] border-[#D6D6D6] rounded-full max-600:w-[42px] max-600:h-[42px]">
    <Image src={src} alt={alt} width={width} height={height} />
  </div>
);
const Blog = () => {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <div className=" pt-[127px] mx-[268px] mb-[100px] max-1250:mx-[200px] max-1100:mx-[150px] max-900:mx-[22px]">
          <div className="flex flex-col gap-[14px] items-start max-600:gap-[17px]">
            <h2 className="text-[#100F0F] text-[36px] font-bold leading-[44px] max-w-[600px] max-900:text-[28px] max-900:leading-[34px] max-900:max-w-[320px]">
              ბეტონის ტიპები და მათი გამოყენება
            </h2>
            <div className="w-full flex justify-between items-center max-600:flex-col max-600:items-start max-600:gap-[20px]">
              <aside className="flex items-center gap-[34px] ">
                <h4 className="text-[#5C5C5C] ">20 მარტი 2024</h4>
                <div className="flex items-center gap-[8px]">
                  <Image
                    src="/assets/icons/time.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                  <h4 className="text-[#5C5C5C] ">5 წუთი</h4>
                </div>
              </aside>
              <aside className="flex items-center gap-[13px]">
                {icons.map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </aside>
            </div>
          </div>

          <section className="mt-[27px] flex flex-col gap-[53px] max-600:gap-[30px] ">
            <div className=" max-600:max-h-[342px] self-center">
              <Image
                src="/assets/images/construction.png"
                alt="Construction"
                width={902}
                height={529}
              />
            </div>
            <article className="flex flex-col gap-[30px]">
              <h3 className="text-[#100F0F] font-bold text-[24px] leading-[32px]">
                რა არის ცემენტი და როგორ მუშაობს?
              </h3>

              <p className=" font-medium text-[#100F0F] leading-[26px]">
                ცემენტი ერთ-ერთი ყველაზე მნიშვნელოვანი სამშენებლო მასალაა,
                რომელიც მნიშვნელოვან როლს თამაშობს თანამედროვე არქიტექტურასა და
                კონსტრუქციაში. ის გამოიყენება ბეტონის, აგურებისა და სხვა
                სამშენებლო კონსტრუქციების დასამზადებლად. ბეტონის დამზადებისთვის
                ცემენტი შერეულია წყალსა და ინერტულ მასალებთან (ქვიშა და ხრეში),
                რის შედეგადაც მიიღება ძლიერი და მდგრადი კონსტრუქციები.
              </p>

              <p className=" font-medium text-[#100F0F] leading-[26px]">
                ცემენტი ფხვნილი მასალაა, რომელიც წყალთან და სხვა ინგრედიენტებთან
                შერევისას ქმნის ნაერთს, რომელიც დროთა განმავლობაში მაგრდება. ეს
                პროცესი ხდება ქიმიური რეაქციის შედეგად, რომელსაც ჰიდრატაცია
                ეწოდება. მას შემდეგ, რაც ცემენტი დამშრალდება, იგი იძენს
                გამძლეობას და სტრუქტურულ სიძლიერეს, რაც მას იდეალურ მასალად
                აქცევს.
              </p>
            </article>
            <article className="flex flex-col items-start justify-center gap-[30px]">
              <h3 className="text-[#100F0F] font-bold text-[24px] leading-[32px]">
                ცემენტის ტიპები
              </h3>

              <p className=" font-medium text-[#100F0F] leading-[26px]">
                <span className="font-bold">1. პორტლანდცემენტი:</span>{" "}
                პორტლანდცემენტი ყველაზე ფართოდ გამოყენებადი ცემენტის ტიპია და ის
                გამოიყენება ბეტონის, აგურების, ფილების დასამზადებლად. მისი
                მთავარი მახასიათებელი არის სწრაფი გამყარება და მაღალი სიმტკიცე.
                პორტლანდცემენტის შემადგენლობაში შედის კირქვა, თიხა და გიფსის
                მცირე რაოდენობა. მისი მაღალი სიმტკიცე მას იდეალურს ხდის
                ხანგრძლივი კონსტრუქციებისთვის, როგორიცაა ხიდები, სარდაფები და
                საყრდენი კედლები.
              </p>

              <p className=" font-medium text-[#100F0F] leading-[26px]">
                <span className="font-bold"> 2. თეთრი ცემენტი: </span>ეს არის
                პორტლანდცემენტის მსგავსი პროდუქტი, თუმცა მისი დამზადების
                პროცესში იშორებენ რკინის ოქსიდებს, რაც მისთვის თეთრ ფერს
                უზრუნველყოფს. თეთრი ცემენტი ხშირად გამოიყენება დეკორატიული
                მიზნებისთვის, რათა შენობების ფერი და ტექსტურა იყოს ესთეტიკური და
                უნიკალური. ის ასევე კარგი ვარიანტია მოპირკეთებული ან გამჭვირვალე
                ზედაპირებისთვის
              </p>

              <p className=" font-medium text-[#100F0F] leading-[26px]">
                <span className="font-bold">
                  3. სწრაფად გამყარებადი ცემენტი:{" "}
                </span>{" "}
                ცემენტის ეს ტიპი შედარებით სწრაფად გამყარებას იწყებს და
                გამოიყენება ისეთ სიტუაციებში, სადაც დრო გადამწყვეტია. მისი
                მთავარი უპირატესობაა სწრაფი სიმტკიცე და გამძლეობა, რაც ამცირებს
                მშენებლობის პროცესს და საშუალებას აძლევს მშენებელს, სწრაფად
                მიაღწიოს სასურველ შედეგს.
              </p>

              <p className=" font-medium text-[#100F0F] leading-[26px]">
                <span className="font-bold">4. ჰიდრავლიკური ცემენტი: </span>ეს
                ცემენტი გამოირჩევა წყალში მდგრადობით და იდეალურია წყალთან მყოფი
                კონსტრუქციებისთვის, როგორიცაა წყალსაცავები, ხიდები და სარდაფები.
                ის ინარჩუნებს თავის სტრუქტურულ თვისებებს ტენიან გარემოშიც, რაც
                მას უნიკალურ გამოყენებად აქცევს.
              </p>
            </article>
            <Image
              src="/assets/images/construction2.png"
              alt="Construction"
              width={902}
              height={529}
              style={{ alignSelf: "center" }}
            />
            <article className="flex flex-col  gap-[30px]">
              <h3 className="text-[#100F0F] font-bold text-[24px] leading-[32px]">
                დასკვნა
              </h3>
              <p className=" font-medium text-[#100F0F] leading-[26px]">
                ცემენტი არის სამშენებლო მასალა, რომლის გარეშე თანამედროვე
                არქიტექტურა წარმოუდგენელია. მისი სიმტკიცე, გამძლეობა და
                მრავალმხრივი გამოყენება მას შეუცვლელად აქცევს ნებისმიერი ტიპის
                პროექტში. თითოეული ტიპი გამიზნულია კონკრეტული გამოყენებისთვის,
                რაც საშუალებას აძლევს ინჟინრებს და მშენებლებს, ისარგებლონ
                ცემენტის უპირატესობებით ნებისმიერი გარემოსა და საჭიროების
                შესაბამისად.
              </p>
              <p className=" font-medium text-[#100F0F] leading-[26px]">
                პროექტის წარმატებისთვის აუცილებელია სწორი ტიპის ცემენტის შერჩევა
                – პორტლანდცემენტი იდეალურია ბეტონისთვის, თეთრი ცემენტი –
                ესთეტიკური პროექტებისთვის, ხოლო ჰიდრავლიკური ცემენტი – წყალთან
                დაკავშირებული პროექტებისთვის. ყურადღება მიაქციეთ ცემენტის
                ხარისხს, წარმოების თარიღს და მის სწორად შენახვის პირობებს.
              </p>
            </article>
          </section>
        </div>
        <BlogSection
          needButton
          style="bg-white"
          headline="შეიძლება ასევე დაგაინტერესოთ"
        />
      </div>
    </>
  );
};

export default Blog;
