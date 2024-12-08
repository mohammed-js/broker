// Server Component
import React from "react";
import instance from "@/utils/interceptor";

import ClientComponent from "./ClientComponent";

const getData = async () => {
  const response = await instance.get("/todos");
  return response;
};

export default async function ServerComponentResumedOnTheClient() {
  try {
    const data = await getData();
    return (
      <div>
        <h1>{data.title}</h1>
        <ClientComponent initialTitle={data.title} />
      </div>
    );
  } catch (error) {
    console.log("Error fetching data:", error.message);
    return <div>Failed to load data. Please try again later.</div>;
  }
}
