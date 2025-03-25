import { FC } from "react";

interface SideBlockProps {
    title: string;
    children: React.ReactNode;
}

export const SideBlock:FC<SideBlockProps> = ({ title, children }) => {
  return (
    <div className="mb-5 p-4 bg-white shadow-md rounded-lg"> 
      <h6 className="p-4 text-lg font-semibold">{title}</h6> 
      {children}
    </div>
  );
};
