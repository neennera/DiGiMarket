"use client";

import ItemDisplay from "./components/itemDisplay";
import ItemEdit from "./components/itemEdit";

export default async function Page({ params }: { params: { itemId: string } }) {
  return (
    <>
      <ItemDisplay itemId={params.itemId} />
      <ItemEdit itemId={params.itemId} />
    </>
  );
}
