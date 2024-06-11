"use client";

import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main>
      <section>
        <h1 className="text-3xl font-bold">This is Cart</h1>
        <Link href="/user/login">
          <button className="bg-blue-300 rounded-md p-2">
            Please Login Before Using Cart
          </button>
        </Link>
      </section>
    </main>
  );
}
