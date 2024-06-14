import React from "react";
import submitForm from "./submitForm";

export default function SearchForm() {
  return (
    <form action={submitForm} className="flex flex-row space-x-2">
      <input className="text-black rounded-md" type="text" name="name" />
      <button className="bg-blue-600 rounded-md px-2 py-1">Search</button>
    </form>
  );
}
