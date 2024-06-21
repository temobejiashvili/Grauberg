import React from "react";

export const CustomVerticalProgress = ({ progress }: { progress: number }) => {
  return (
    <div className="w-4 h-full bg-gray-200 rounded overflow-hidden">
      <div
        className="w-full bg-blue-500 transition-height duration-300"
        style={{ height: `${progress}%` }}
      ></div>
    </div>
  );
};
