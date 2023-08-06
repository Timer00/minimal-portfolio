import Head from "next/head";
import { useResponsiveSquare } from "~/hooks/responsiveSquare";
import useDarkMode from "~/hooks/darkMode";
import useReverseScroll from "~/hooks/reverseScroll";
import { Hero } from "~/sections/Hero";
import { Tech } from "~/sections/Tech";
import { Projects } from "~/sections/Projects";
import { LightDarkToggle } from "~/components/LightDarkToggle";

export default function Home() {
  const [, flip] = useDarkMode();
  useReverseScroll('reverse-scroll')
  const dimension = useResponsiveSquare(0.9);

  return (
    <>
      <Head>
        <title>Theo Carrara</title>
        <meta name="description" content="Full stack Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="transition-all ease-in duration-1000 min-h-screen bg-secondary flex justify-center items-center text-primary">
        <LightDarkToggle switchMode={flip} className='absolute top-[6vh] sm:top-[3vh] right-[20vw] sm:right-[10vw]'/>
        <div className="container grid grid-cols-5 grid-rows-2" style={{ width: dimension, height: dimension }}>
          <Hero className='grid-rows-3 col-span-3 row-span-1'/>
          <Tech className='grid-cols-3 col-span-2 row-span-2'/>
          <Projects className='col-span-3 row-span-1' />
        </div>
      </main>
    </>
  );
}
