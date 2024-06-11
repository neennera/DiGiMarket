export default function Page({ params }) {
  return (
    <section>
      <h1>Item Page</h1>
      {params.itemId}
    </section>
  );
}
