import ClientComponent from "@/app/components/ClientComponent";
import ServerComponent from "@/app/components/ServerComponent";
import ServerComponentResumedOnTheClient from "@/app/components/ServerComponentResumedOnTheClient";
import React from "react";

export default function index() {
  return (
    <>
      <ServerComponent></ServerComponent>
      {/* <ClientComponent></ClientComponent> */}
      {/* <ServerComponentResumedOnTheClient></ServerComponentResumedOnTheClient> */}
    </>
  );
}
