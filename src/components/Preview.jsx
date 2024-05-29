import React from "react";
import { useState } from "react";
import GeneralInfo from "./GeneralInfo";

function Preview() {
  const [val, setVal] = useState("Hello There");
  return (
    <div>
      <input type="text" defaultValue={val} />
    </div>
  );
}

export default Preview;
