import React, { ReactNode } from "react";

type TArgs = {
  children: ReactNode;
};

export function ContainerDiv({ children }: TArgs) {
  return <div className="px-4 z-30 md:px-14">{children}</div>;
}
