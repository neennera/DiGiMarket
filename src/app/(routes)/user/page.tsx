import React from "react";
import { headers } from "next/headers";

export default function Page() {
  const headerRequest = headers();
  const user = JSON.parse(headerRequest.get("username"));

  return (
    <>
      <h1 className="text-3xl">User has Login</h1>
      {user.username}
    </>
  );
}
