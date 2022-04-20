import React from "react";

export default function ErrorComponent({ error }) {
  return (
    <div class="h-100 row align-items-center">
      <div class="col" style="background:red">
        {error}
      </div>
    </div>
  );
}
