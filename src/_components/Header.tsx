import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="items-center text-black bg-primary text-md font-semibold justify-between w-full py-4 sticky top-0 backdrop-blur-md flex flex-row px-5">
        <div className="text-2xl font-abril font-semibold">
          <Link href="/">DiGi Market</Link>
        </div>
        <div className="flex flex-row space-x-5">
          <Link href="/shop">
            <p>Shops</p>
          </Link>
          <Link href="/cart">
            <p>My Cart</p>
          </Link>
          <Link href="/user">
            <p>User</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
