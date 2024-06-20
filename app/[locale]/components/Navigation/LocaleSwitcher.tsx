"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { CustomSelect } from "@/components";

const selectedOptions = {
  en: {
    name: "Eng",
    imageUrl: "/images/Flag_of_the_United_Kingdom_(1-1).svg.png",
    alt: "United Kingdom Logo",
  },
  ge: {
    name: "Geo",
    imageUrl: "/images/georgia_square_flag-512.webp",
    alt: "Georgia Logo",
  },
};

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLocale = (newLocale: string) => {
    // const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <CustomSelect
      options={[
        { name: "Eng", value: "en" },
        { name: "Geo", value: "ge" },
      ]}
      handleSelect={handleChangeLocale}
      selectedOption={selectedOptions[currentLocale === "en" ? "en" : "ge"]}
    />
  );
}
