import Head from "next/head";
import Link from "next/link";
import { useResponsiveSquare } from "~/hooks/responsiveSquare";
import useDarkMode from "~/hooks/darkMode";
import useReverseScroll from "~/hooks/reverseScroll";

export default function Home() {
  useDarkMode();
  useReverseScroll('reverse-scroll')
  const dimension = useResponsiveSquare(0.9);

  return (
    <>
      <Head>
        <title>Theo Carrara</title>
        <meta name="description" content="Theo Portfolio" />
        <link rel="stylesheet" href="https://use.typekit.net/rcs7rws.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-secondary flex justify-center items-center text-primary">
        <div className="container grid grid-cols-5 grid-rows-2" style={{ width: dimension, height: dimension }}>
          <div className='grid grid-rows-3 col-span-3 row-span-1 bg-secondary'>
            <div className='row-span-1 center-content font-bold text-[6vmax]'>theo.host</div>
            <div className='row-span-2 p-5 px-10 text-justify text-2xl tracking-tight'>
              Accomplished Tech Lead with a successful 8 year track record managing teams and delivering high- quality
              software solutions.
            </div>
          </div>
          <div className='grid grid-cols-3 col-span-2 row-span-2 border-l-2 border-primary'>
            <div className="col-span-2 m-5 mb-14 mt-0 mr-0 text-2xl overflow-y-scroll overflow-x-hidden">
              React<br />
              Javascript<br />
              NodeJs<br />
              Tailwind<br />
              NextJs<br />
              Docker<br />
              Liquid<br />
              HTML5<br />
              CSS3<br />
              React Native<br />
              Git<br />
              MySql<br />
              Postgres<br />
              Graphic Design<br />
              GraphQL<br />
              REST
            </div>
            <div className='grid grid-rows-2 col-span-2 row-span-1 mb-4'>
              <div className='row-span-1 p-5 font-bold text-[6vmax] border-b-2 border-primary text-bottom'>
                Tech
              </div>
              <div className='row-span-1'>
                <p className='pt-5 pl-5 text-[2vmax] font-bold tracking-widest'>
                  T H E O<br />C A R R A R A
                </p>
                <div className='m-5 mt-3 text-xl'>
                2016-2023
              </div>
              </div>
            </div>

          </div>
          <div className='transition-all justify-end flex col-span-3 row-span-1 group'>
            <div className='flex flex-none items-end font-bold text-5xl bg-secondary leading-normal'>
              P R<br />O J<br />E C<br />T S
            </div>

            <div className='ease-in-out duration-500 transform flex flex-col justify-end text-2xl
            group-hover:flex-grow w-0 p-5 overflow-hidden'>
              <span className='delay-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200'>PROFESSIONAL</span>
              <div id='reverse-scroll' className='w-full vertical-rl rotate-180 overflow-x-scroll pb-20'>
                React<br />
                Javascript<br />
                NodeJs<br />
                Tailwind<br />
                NextJs<br />
                Docker<br />
                Liquid<br />
                HTML5<br />
                CSS3<br />
                React Native<br />
                React Native<br />
                React Native<br />
                React Native<br />
                Git<br />
                MySql<br />
                Postgres<br />
                Graphic Design<br />
                GraphQL<br />
                REST
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
