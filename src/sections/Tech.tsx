import { twMerge } from 'tailwind-merge';
import content from '~/assets/content.json';
import { Selectable } from "~/components/Selectable";

interface TechContent {
  title: string;
  name: string;
  year: string;
  list: string[];
}

interface TechProps {
  className?: string;
  handleTechFilter: (tech: string) => void;
}

export const Tech = ({ className, handleTechFilter }: TechProps) => {
  const { title, name, year, list } = content.tech as TechContent;

  return (
    <div className={twMerge('grid border-l-2 border-primary', className)}>
      <div
        className="col-span-2 pr-2 sm:m-5 m-3 sm:mb-14 mb-6 mt-0 sm:mr-0 mr-0 sm:text-[1.6vw] text-[3vw] overflow-y-scroll overflow-x-hidden">
        {list.map((item, i) => <Selectable onClick={handleTechFilter} className='pl-2' key={i}>{item}</Selectable>)}
      </div>

      <div className='grid grid-rows-2 col-span-3 row-span-1 mb-4'>
        <div className='row-span-1 sm:p-5 p-2 font-bold sm:text-[6vw] text-[9vw] border-b-2 border-primary text-bottom'>
          {title}
        </div>
        <div className='row-span-1 max-w-fit'>
          <p className='sm:pt-5 pt-3 sm:pl-5 pl-3 sm:text-[1.8vw] text-[3vw] font-bold tracking-widest'>
            T H E O<br />C A R R A R A
          </p>
          <div className='sm:m-5 m-3 sm:mt-3 mt-1 sm:text-[1.3vw] text-[2vw]'>
            {year}
          </div>
        </div>
      </div>

    </div>
  );
};
