"use client";
import Image from "next/image";
import Link from "next/link";
import { TranslateText } from "../translateText/TranslateText";
import { useEffect, useState } from "react";

interface BlogCardProps {
  imageUrl: string;
  content: string;
  header: string;
  id: number;
}

async function getBlogImage(src: string) {
  const res = await fetch(`https://grauberg.com.ge/main/file/${src}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const blob = await res.blob();
  return URL.createObjectURL(blob);
}

const BlogCard: React.FC<BlogCardProps> = async ({
  imageUrl,
  content,
  header,
  id,
}) => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageSrc = await getBlogImage(imageUrl);
        setImageData(imageSrc || null); // Ensure correct key from response
      } catch {
        setError(true);
      }
    };

    if (imageUrl) {
      fetchImage();
    }
  }, [imageUrl]);

  if (error) return <p>Error loading image</p>;
  if (!imageData) return <p>Loading...</p>;

  return (
    <Link
      href={`/blog/article/${id}`}
      className="w-[375px] max-900:w-[370px] hover:shadow-little rounded-[16px]"
    >
      <aside className="w-full h-[292px] overflow-hidden rounded-tl-[16px] rounded-tr-[16px]">
        {!imageData ? (
          <p>Loading...</p>
        ) : (
          <Image
            src={imageData}
            alt={`blog`}
            width={381}
            height={292}
            className="transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              width: "100%",
              height: "292px",
              objectFit: "cover",
            }}
          />
        )}
      </aside>
      <aside className="py-[20px] px-[17px] border-[1px] border-solid border-[#D6D6D6] rounded-bl-[16px] rounded-br-[16px]">
        <h3 className="h-[64px] text-[24px] text-[#100F0F] font-bold leading-[32px] max-900:text-[20px] max-900:leading-[30px] overflow-hidden text-ellipsis line-clamp-2">
          <TranslateText text={header} />
        </h3>
        <p className="h-[64px] text-[14px] text-[#5C5C5C] leading-[20px] mt-[11px] overflow-hidden text-ellipsis line-clamp-3">
          <TranslateText text={content} />
        </p>
      </aside>
    </Link>
  );
};

export default BlogCard;
