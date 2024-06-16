import React, { useEffect, useState } from "react";
import { headers } from "next/headers";
import CreateItemForm from "./components/CreateItemForm";
import RegisterPromote from "./components/RegisterPromote";
import Sidebar from "./components/sidebar";
import axios from "axios";

export default async function Page() {
  const headerRequest = headers();
  const userId = JSON.parse(headerRequest.get("userId"));

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId.userId}`
  );
  const user = res.data.data;

  return (
    <>
      <div className="w-full h-full flex sm:flex-row m-auto mt-5">
        <Sidebar />
        <div className="w-full sm:w-[60%] py-3 space-y-20">
          <h1 className="text-5xl font-semibold mb-6">
            Hello, {user.username} 👋🏽
          </h1>
          <div id="shopManage">
            <h1 className="text-2xl font-semibold mb-6">Register Your Shop</h1>
            <RegisterPromote />
          </div>
          <div id="newItem">
            <h1 className="text-2xl font-semibold mb-6">Create a New Item</h1>
            <CreateItemForm />
          </div>
        </div>
      </div>
    </>
  );
}
