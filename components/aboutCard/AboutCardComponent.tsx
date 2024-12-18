import React from "react";
import LogoMini from "../../public/assets/logoMini.svg";

const AboutCardComponent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto rounded-lg shadow-md border border-gray-200 overflow-hidden bg-backgroundGrey">
      {/* Header Section */}
      <div className="flex items-center ">
        {/* Icon */}
        <div
          className="relative rounded-br-[34px] p-[1px]  "
          style={{
            background: "linear-gradient(142deg, #F5F5F5 60%, #F29893 100%)",
          }}
        >
          <div
            className="w-[203px] h-[101px] 
        flex justify-center
         items-center
         rounded-tl-[23px]
         rounded-br-[34px]
         bg-[#f5efef]"
          >
            <div className="w-[41px] mt-[9px] h-[40px] flex-shrink-0  text-white flex items-center justify-center rounded-full">
              {/* Add the actual SVG or Icon */}
              <LogoMini />
            </div>
          </div>
        </div>
        {/* Title */}
        <div
          className="relative rounded-bl-[34px] w-full p-[1px] ml-2"
          style={{
            background: "linear-gradient(192deg, #F5F5F5 50%, #F29893 100%)",
          }}
        >
          <div
            className="h-[101px] 
          flex justify-start
          items-center
          w-full
          pl-7
          rounded-bl-[34px]
          bg-[#f5efef]
          "
          >
            <h2 className="ml-3 w-full text-28 font-bold text-darkPrimary">
              გრაუბერგის ხედვაა
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 py-4 text-darkPrimary text-16 leading-relaxed">
        <p>
          იყოს პროგრესის მაგალითი სამშენებლო ინდუსტრიაში და ჩამოყალიბდეს ბაზრის
          ლიდერად, ჩვენმა პროდუქტებმა და სერვისებმა კი ხარისხისა და ინოვაციების
          უმაღლესი სტანდარტი ასახოს. გრაუბერგი უარს ამბობს ნებისმიერ
          კომპრომისზე, რომელიც, შესაძლოა, პროდუქციის ხარისხზე აისახოს. ჩვენი
          მიზანია, რომ მნიშვნელოვანი წვლილი შევიტანოთ თქვენს მიერ შესრულებული
          სამუშაოს ხარისხში და დავიცვათ ჩვენი ვალდებულება სამართლიანი ფასების,
          დროული მიწოდებისა და უმაღლესი ხარისხის ყველა სტანდარტში.
          <br />
          <br />
          გრაუბერგი ხელმძღვანელობს ხარისხის უზრუნველყოფისა და სოციალური
          პასუხისმგებლობის ვალდებულებით. ჩვენ პრიორიტეტს ვანიჭებთ მომხმარებელთა
          კმაყოფილებას, ეთიკურ ბიზნეს პრაქტიკას და აქტიურ მონაწილეობას CSR
          ინიციატივებსა და მდგრადობის პოლიტიკაში, რაც ჩვენს საზოგადოებასა და
          გარემოს სარგებელს მოუტანს.ჩვენ მზად ვართ ვაწარმოოთ ნამდვილი ქართული
          პროდუქცია, მხარი დავუჭიროთ ადგილობრივ ინდუსტრიებს და აქტიური წვლილი
          შევიტანოთ ჩვენი ქვეყნის ზრდასა და განვითარებაში. გრაუბერგი
          მომხმარებელს საუკეთესო ფასად სთავაზობს გარანტირებულად ხარისხიან
          პროდუქციას და უწევს საიმედო მომსახურებას.Ჩვენ მუდმივი გაუმჯობესების
          ერთგულები ვართ, რათა ვიყოთ ყველაზე სასურველი არჩევანი საქართველოში
          მიმდინარე ყველა სამშენებლო პროექტისთვის.
        </p>
      </div>
    </div>
  );
};

export default AboutCardComponent;
