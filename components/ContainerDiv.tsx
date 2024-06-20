import React, { ReactNode } from "react";

type TArgs = {
  children: ReactNode;
};

export function ContainerDiv({ children }: TArgs) {
  return <div className="p-4 md:p-14">{children}</div>;
}
