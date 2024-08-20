"use client";
import { useState } from "react";
export default function ClientComponentOne({children}:{
    children:React.ReactNode
}) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>ClientComponentsOne</h1>
      {children}
    </div>
  );
}
