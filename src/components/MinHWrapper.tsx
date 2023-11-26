import React from "react";

const MinHWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen">{children}</div>;
};

export default MinHWrapper;
