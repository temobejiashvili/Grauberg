"use client";
import { useTranslation } from "react-i18next";

export default function BlogTranslate({
  index,
  info,
}: {
  index: number;
  info: string;
}) {
  const { t } = useTranslation();
  const blogBasic = t("blogs", { returnObjects: true });
  const data = blogBasic?.[index];

  return <span>{data?.[info]}</span>;
}
