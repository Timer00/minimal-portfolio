import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Theo Carrara</title>
        <meta name="description" content="Theo Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-secondary dark:bg-primary flex justify-center items-center">
        <div className="container w-[50vw] h-[50vw] grid grid-cols-5 grid-rows-2">
          <div className='grid grid-rows-3 col-span-3 row-span-1 bg-secondary'>
            <div className='row-span-1 bg-[#F76C5E]'></div>
            <div className='row-span-2 bg-[#618281]'></div>
          </div>
          <div className='grid grid-cols-2 col-span-2 row-span-1 bg-[#69995D]'>
            <div className="col-span-1 bg-[#A5BD9F]"></div>
          </div>
          <div className='col-span-3 row-span-1 bg-[#586BA4]'></div>
          <div className='grid grid-rows-2 col-span-2 row-span-1 bg-[#A86C81]'>
            <div className='row-span-1 bg-[#F76C5E]'></div>
            <div className='row-span-1 bg-[#618281]'></div>
          </div>
        </div>
      </main>
    </>
  );
}
