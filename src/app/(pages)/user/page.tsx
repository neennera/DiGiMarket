import React from "react";
import { headers } from "next/headers";
import CreateItemForm from "./components/createItemForm";

export default function Page() {
  const headerRequest = headers();
  const user = JSON.parse(headerRequest.get("username"));

  return (
    <>
      <h1 className="text-3xl">User has Login</h1>
      {user?.username}

      <h2 className="text-2xl">Add new items</h2>
      <CreateItemForm />
    </>
  );
}
