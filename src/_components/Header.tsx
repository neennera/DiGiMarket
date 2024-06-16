import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="items-center text-white justify-between w-full h-[50px] bg-slate-900 flex flex-row px-10">
        <div>logo</div>
        <div className="flex flex-row space-x-4">
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
