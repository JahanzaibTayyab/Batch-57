// data fetching (Server/Client)
// api data fetch (Promises)
// async await

// server Components (fetch)

const getQuote = async () => {
  //api calling
  console.log("api calling");
  const data = await fetch("https://catfact.ninja/fact", {
    cache: "no-store"
  });
  if (data.ok) {
    return await data.json();
  }
  throw new Error("Api is not working");
};

export default async function Home() {
  const data = await getQuote();
  console.log("🚀 ~ Home ~ data:", data);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Blog Website
      <h1>{data.fact}</h1>
    </div>
  );
}
