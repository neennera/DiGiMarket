import React, { useState } from "react";

function submitForm(searchWord: string) {
  console.log(searchWord);
}

export default function SearchForm() {
  const [searchWord, setSearchWord] = useState("");
  return (
    <form className="flex flex-row space-x-2">
      <input
        className="text-black rounded-md"
        type="text"
        value={searchWord}
        name="name"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <button
        className="bg-blue-600 text-white font-bold rounded-md px-2 py-1"
        onClick={(e) => {
          e.preventDefault();

          submitForm(searchWord);
        }}
      >
        Search
      </button>
    </form>
  );
}
