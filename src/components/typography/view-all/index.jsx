import React from "react";

export const ViewAll = ({ children }) => {
  return (
    <p className="font-[600] text-[16px] text-[#3563E9] leading-6 border-b-2 hover:border-b-2 hover:border-[#3563E9] hover:cursor-pointer">
      {children}
    </p>
  );
};
