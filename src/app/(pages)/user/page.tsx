import React from "react";
import { headers } from "next/headers";
import CreateItemForm from "./components/createItemForm";

export default function Page() {
  const headerRequest = headers();
  const userId = JSON.parse(headerRequest.get("userId"));

  return (
    <>
      <h1 className="text-3xl">Hello {userId?.userId}</h1>

      <h2 className="text-2xl">Add new items</h2>
      <CreateItemForm />
    </>
  );
}
