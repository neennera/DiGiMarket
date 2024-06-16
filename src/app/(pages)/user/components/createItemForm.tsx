"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Create = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/products", {
        name,
        price: Number(price),
        description: desc,
      });
      router.push("/shop");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <fieldset>
          <label className="block text-sm font-medium text-gray-700">
            Item Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </fieldset>
        <fieldset>
          <label className="block text-sm font-medium text-gray-700">
            Item Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            required
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </fieldset>
        <fieldset>
          <label className="block text-sm font-medium text-gray-700">
            Item Description
          </label>
          <textarea
            name="desc"
            id="desc"
            required
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Create;
