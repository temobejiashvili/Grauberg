"use client";
import { useTranslation } from "react-i18next";

export default function useBlogTranslate() {
  const { t } = useTranslation();
  const blogBasic = t("blogs", { returnObjects: true });

  return blogBasic;
}
