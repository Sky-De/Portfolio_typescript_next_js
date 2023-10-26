import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 border">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h2>By skyDe</h2>
        </div>
      </div>

      <div className="">
        <h1>Portfolio</h1>
      </div>
    </main>
  );
}
