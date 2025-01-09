"use client";

import { useTranslation } from "react-i18next";

type TranslateTextType = {
  text: string;
};

export const TranslateText = ({ text }: TranslateTextType) => {
  const { t } = useTranslation();
  return <span>{t(text)}</span>;
};
