"use client";

import React, { useState, useEffect } from "react";

export default function ClientComponent({ initialMessage }) {
  const [message, setMessage] = useState(initialMessage);

  const handleClick = () => {
    setMessage("Updated message from the Client Component!");
  };

  return (
    <div>
      <h2>Client Component</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
