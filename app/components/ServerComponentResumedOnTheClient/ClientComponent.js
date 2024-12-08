"use client";

import React, { useState } from "react";

export default function ClientComponent({ initialTitle }) {
  const [data, setData] = useState(initialTitle);

  // const handleChange = (e) => setTitle(e.target.value);

  return (
    <div>
      {data.map((item) => item.title)}
      <p>Current Title: {title}</p>
    </div>
  );
}
