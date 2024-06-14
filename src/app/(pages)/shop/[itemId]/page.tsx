// "use client";
// import { useEffect, useState } from "react";

import Loading from "@/components/Loading";
import Link from "next/link";
import { Suspense } from "react";

async function getShop(itemId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MOCKAPI_URL}/Shops/${itemId}`
  );

  if (!response.ok) {
    throw new Error("can not fetxh");
  } else {
    return response.json();
  }
}

export default async function Page({ params }: { params: { itemId: string } }) {
  const shop = await getShop(params.itemId);
  return (
    <section>
      <h1 className="text-3xl font-bold">{shop.name} Page</h1>
      <p className="text-xl">Run by : {shop.owner}</p>
      <Link href="/shop">Shop</Link>
    </section>
  );
}
