"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ItemContext } from "./ItemContext";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "THB",
  minimumFractionDigits: 2,
});

export default function ItemDisplay() {
  const item = useContext(ItemContext);
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-3xl font-bold">{item?.name}</h1>
      <div className="h-[300px] w-[80%] self-center bg-gray-500 rounded-lg drop-shadow-lg "></div>
      <p className="text-xl">Price : {formatter.format(item.price)}</p>
      <p className="text-xl">Description : {item?.description}</p>
    </div>
  );
}
