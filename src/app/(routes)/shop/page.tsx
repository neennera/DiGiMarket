"use client";

import SearchForm from "./components/SearchForm";
import ShopList from "./components/ShopList";

export default function Page() {
  return (
    <section>
      <div className="flex flex-row p-5">
        <div className="w-[25vw] h-full">Search Bar</div>
        <div className="w-[70vw] space-y-5">
          <h1 className="text-3xl font-bold">Our Shops</h1>
          <div className="flex flex-row space-x-2">
            <h2>Searching a shop </h2>
            <SearchForm />
          </div>
          <ShopList />
        </div>
      </div>
    </section>
  );
}
