import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
}

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl px-5 md:px-4">
      <div className="mx-auto grid w-full max-w-sm auto-rows-[21rem] grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] my-20">
        {children}
      </div>
    </div>
  );
};
