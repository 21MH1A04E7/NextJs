import React from "react";
import fs from "fs";
import ServerComponentTwo from "./server-component-two";

function ServerComponentOne() {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
  return (
    <div>
      <h1>ServerComponentOne</h1>
      <ServerComponentTwo/>
    </div>
  );
}

export default ServerComponentOne;
