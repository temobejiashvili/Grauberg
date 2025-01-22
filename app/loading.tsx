import dynamic from "next/dynamic";
import React from "react";

const LoaderComponent = dynamic(
  () => import("@/components/loaderComponent/LoaderComponent")
);

export default function loading() {
  return (
    <div className="w-[100vw] h-[100vh] bg-red-800 absolute top-0 left-0">
      Loading....
    </div>
  );
}
