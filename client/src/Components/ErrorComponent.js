import React from "react";

export default function ErrorComponent({ error }) {
  return (
    <div classname="h-100 row align-items-center">
      <div classname="col" style={{color:"red"}}>
        {error}
      </div>
    </div>
  );
}
