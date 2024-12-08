import React from "react";
import instance from "@/utils/interceptor";

const getData = async () => {
  const response = await instance.get("/todos");
  return response.data;
};

export default async function ServerComponent() {
  try {
    const data = await getData();
    return (
      <div>
        {data.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    );
  } catch (error) {
    console.log("Error fetching data:", error.message); // on node server
    return <div>"Error fetching data:" {error.message}</div>; // returned to the client
  }
}
