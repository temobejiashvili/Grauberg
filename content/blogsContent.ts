import beton from "@/public/images/beton.webp";
import factory from "@/public/images/factory.webp";
import wall from "@/public/assets/images/wall.png";
import building from "@/public/assets/images/building.png";
import image431 from "@/public/assets/images/image431.png";
import image432 from "@/public/assets/images/image432.png";
import constructionImage2 from "@/public/assets/images/carouselImage2.png";

export const blogs = [
  {
    image: beton,
    alt: "betton",
    title: "betonTypes",
    text: "concreteInArchitectureEngineering",
    url: "/blog/article?=1",
    id: 0,
  },
  {
    image: factory,
    alt: "factory",
    title: "betonTypes",
    text: "ბეტონი ერთ-ერთი ყველაზე ფართოდ გამოყენებადი მასალაა მშენებლობაში, რომელიც გამოირჩევა სიმტკიცითა და გამძლეობით. ბეტონი მიიღება ბუნებრივი და ხელოვნური მასალების ურთიერთ შეზავებით და შედგება რამდენიმე ძირითადი კომპონენტისგან: ქვიშა, ღორღი, ცემენტი, წყალი, ცემენტისებრი შემავსებელი და სხვადასხვა ტიპის პლასტიფიკატორები.",
    url: "/blog/article?=2",
  },
  // {
  //   image: wall,
  //   alt: "betton",
  //   title: "CemGuide",
  //   text: "cemStrength",
  //   url: "/blog/article",
  // },
  // {
  //   image: building,
  //   alt: "building",
  //   title: "qualityConcreteHomes",
  //   text: "factoryConcreteMixing",
  //   url: "/blog/article",
  // },
  // {
  //   image: image431,
  //   alt: "betton",
  //   title: "concreteStrengthCementRole",
  //   text: "concreteStrengthDurability",
  //   url: "/blog/article",
  // },
  // {
  //   image: image432,
  //   alt: "betton",
  //   title: "constructionProcessSafety",
  //   text: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო გრაფ იული ნაწარმის შემქმნელებს...",
  //   url: "/blog/article",
  // },
];

export const articles = [
  {
    image: constructionImage2,
    header: "ბეტონის ტიპები და მათი გამოყენება",
    headerDetails:
      "ბეტონი ერთ-ერთი ყველაზე ფართოდ გამოყენებადი მასალაა მშენებლობაში, რომელიც გამოირჩევა სიმტკიცითა და გამძლეობით. ბეტონი მიიღება ბუნებრივი და ხელოვნური მასალების ურთიერთ შეზავებით და შედგება რამდენიმე ძირითადი კომპონენტისგან: ქვიშა, ღორღი, ცემენტი, წყალი, ცემენტისებრი შემავსებელი და სხვადასხვა ტიპის პლასტიფიკატორები.",
    olList: [
      {
        header: "შეგვიძლია გამოვყოთ ბეტონის ოთხი ტიპი",
        list: [
          {
            key: "განსაკუთრებით მძიმე (ზემძიმე) ბეტონი-",
            desc: "2500 კგ/მ3 და მეტი",
          },
          { key: "მძიმე (ჩვეულებრივი) ბეტონი- ", desc: "1800-2500 კგ/მ3" },
          {
            key: "მსუბუქი ბეტონი –",
            desc: " 500-1800 კგ/მ3 (ზოგჯერ შემსუბუქებული 1800-2200 კგ/მ3)",
          },
          {
            key: "თბოსაიზოლაციო (განსაკუთრებით მსუბუქი ბეტონი) -",
            desc: " 500 კგ/მ3-მდე",
          },
        ],
        subText:
          "ბეტონს აქვს უნარი გაუძლოს მძიმე დატვირთვას და მკაცრ გარემო პირობებს, რის გამოც იგი იდეალურია ნებისმიერი ტიპის მშენებლობისთვის, მათ შორის: ინფრასტრუქტურული ნაგებობებისთვის, კომერციული და საწარმოო ობიექტების, გზების, ხიდებისა და გვირაბების მშენებლობებისთვის.",
      },
      {
        header:
          "ბეტონი, ასევე, შეგვიძლია დავყოთ სხვადასხვა დანიშნულების მიხედვითაც",
        list: [
          {
            key: "მძიმე (ჩვეულებრივი) ბეტონი –",
            desc: " გამოიყენება შენობებისა და ნაგებობებისთვის",
          },
          { key: "", desc: "ჰიდროტექნიკური ბეტონი" },
          { key: "", desc: "საგზაო ნაგებობებისთვის განკუთვნილი ბეტონი" },
          { key: "ბიოლოგიური –", desc: " გამოსხივებისაგან დამცავი ბეტონი" },
          { key: "", desc: "ცეცხლმედეგი ბეტონი" },
          { key: "", desc: "დეკორატიული ბეტონი" },
          { key: "ქიმიური –", desc: " მჟავა და ტუტეგამძლე ბეტონი" },
          { key: "", desc: "სწრაფმყარებადი ბეტონი" },
        ],
        subText: "",
      },
    ],
    footerTitle: "თანამედროვე ბეტონის წარმოება",
    footerDetails: [
      "თანამედროვე ბეტონის წარმოებისას იყენებენ ქვიშისა და ღორღის ორ-ორ ფრაქციას, რაც ხელს უწყობს მათი დოზირების ზუსტ განსაზღვრას, შედეგად კი მიიღება მაქსიმალურად ერთგვაროვანი და კარგი კონსისტენციის მქონე პროდუქტი. ასევე, იყენებენ სხვადასხვა სახეობის პლასტიფიკატორებს, მშენებლობის ტიპის, გარემოსა და სპეციფიკაციების გათვალისწინებით.",
      "ბეტონი მშენებლობის ინდუსტრიის განუყოფელ ნაწილად რჩება და განაგრძობს განვითარებას, რომ უპასუხოს, როგორც ეკოლოგიურ გამოწვევებს, ასევე, ინდუსტრიაში არსებულ მოთხოვნებს. თანამედროვე ტექნოლოგიები კი ხელს უწყობს ბეტონის მდგრად და ეფექტურ გამოყენებას ინფრასტრუქტურული ნაგებობის მშენებლობისას.",
    ],
  },
  {
    header: "cementBasics",
    headerDetails: "coreCement",
    ulList: [
      {
        header: "makingCement",
        list: [
          { key: "rawMaterials", desc: "rawMaterialsDesc" },
          { key: "materials", desc: "materialsDesc" },
          { key: "oven", desc: "ovenDesc" },
          { key: "grinding", desc: "grindingDesc" },
          { key: "distribution", desc: "distributionDesc" },
        ],
      },
      {
        header: "cementTypes",
        list: [
          { key: "portlandcement", desc: "cementVarietie" },
          { key: "Portland Pozzolana Cement (PPC)", desc: "pozzolanaDesc" },
          { key: "quickSetCement", desc: "cementTypesExplained" },
          { key: "sulphatResistannce", desc: "sulphatDesc" },
          { key: "whiteCement", desc: "whiteCementOverview" },
          { key: "hydroCem", desc: "aquaCem" },
        ],
      },
    ],
    footerTitle: "თანამედროვე ბეტონის წარმოება",
    footerDetails: [
      "თანამედროვე ბეტონის წარმოებისას იყენებენ ქვიშისა და ღორღის ორ-ორ ფრაქციას, რაც ხელს უწყობს მათი დოზირების ზუსტ განსაზღვრას, შედეგად კი მიიღება მაქსიმალურად ერთგვაროვანი და კარგი კონსისტენციის მქონე პროდუქტი. ასევე, იყენებენ სხვადასხვა სახეობის პლასტიფიკატორებს, მშენებლობის ტიპის, გარემოსა და სპეციფიკაციების გათვალისწინებით.",
      "ბეტონი მშენებლობის ინდუსტრიის განუყოფელ ნაწილად რჩება და განაგრძობს განვითარებას, რომ უპასუხოს, როგორც ეკოლოგიურ გამოწვევებს, ასევე, ინდუსტრიაში არსებულ მოთხოვნებს. თანამედროვე ტექნოლოგიები კი ხელს უწყობს ბეტონის მდგრად და ეფექტურ გამოყენებას ინფრასტრუქტურული ნაგებობის მშენებლობისას.",
    ],
  },
];
