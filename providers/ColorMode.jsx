"use client";

import { useState } from "react";

const ColorMode = ({ children, mode }) => {
  return (
    <div className={`${mode ? "var(--foreground)" : "var(--background)"} `}>
      {children}
    </div>
  );
};

export default ColorMode;
