"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ItemContext } from "./ItemContext";
import { getUserId } from "@/_assets/user";

export default function ItemEdit() {
  const item = useContext(ItemContext);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  const [userId, setUserId] = useState<Number | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(item);

      const res = await axios.put(`/api/products/${item.id}`, {
        name,
        price: Number(price),
        description: desc,
        userId,
      });
      if (res.data.message == "fail") {
        console.log("dail");
      } else {
        router.push("/shop");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.delete(`/api/products/${item.itemId}`);
      router.push("/shop");
    } catch (error) {
      console.error(error);
    }
  };

  const initItem = async () => {
    try {
      setName(item.name);
      setPrice(item.price);
      setDesc(item.description);
      const response = await getUserId();
      setUserId(Number(response));
    } catch (error: unknown) {
      console.log(error);
    }
  };
  useEffect(() => {
    initItem();
  }, []);

  return (
    <section>
      <form className="space-y-6 w-[50vw] justify-start">
        <div className="flex flex-row space-x-2 w-full">
          <h1 className="text-3xl font-bold w-[20%]">Name :</h1>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 text-3xl block w-[60%] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-row space-x-2 w-full">
          <p className="text-xl w-[20%]">Price : </p>
          <input
            type="text"
            name="price"
            id="price"
            required
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 block w-[60%] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-row space-x-2">
          <p className="text-xl w-[20%]">Description : </p>
          <textarea
            name="desc"
            id="desc"
            required
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 block w-[60%] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="w-full flex justify-between px-[35%]">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
          <button
            onClick={(e) => {
              handleDelete(e);
            }}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Delete this Item
          </button>
        </div>
      </form>
    </section>
  );
}
