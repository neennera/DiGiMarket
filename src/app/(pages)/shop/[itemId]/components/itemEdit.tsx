"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
}

export default function ItemEdit({ itemId }: { itemId: string }) {
  const [item, setItem] = useState<itemSchema>();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`/api/products/${itemId}`, {
        name,
        price: Number(price),
        description: desc,
      });
      router.push("/shop");
    } catch (error) {
      console.error(error);
    }
  };

  const initItem = async () => {
    try {
      const response = await axios.get(`/api/products/${itemId}`);
      setName(response.data.data.name);
      setPrice(response.data.data.price);
      setDesc(response.data.data.description);
    } catch (error: unknown) {
      console.log(error);
    }
  };
  useEffect(() => {
    initItem();
  }, []);
  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-3xl font-bold">
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </h1>
        <p className="text-xl">
          Price :{" "}
          <input
            type="text"
            name="price"
            id="price"
            required
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </p>
        <p className="text-xl">
          Description :{" "}
          <textarea
            name="desc"
            id="desc"
            required
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </p>
        <fieldset>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
}
