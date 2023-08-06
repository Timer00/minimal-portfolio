import { twMerge } from 'tailwind-merge';
import content from '~/assets/content.json';
import { visit } from "yaml/dist/parse/cst-visit";
import itemAtPath = visit.itemAtPath;

interface ProjectsContent {
  title: string;
  list: string[];
}

interface ProjectsProps {
  className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
  const { title, list } = content.projects as ProjectsContent;

  return (
    <div className={twMerge('transition-all justify-end flex col-span-3 row-span-1 group sm:pl-0 pl-8', className)}>
      <div className='flex flex-none items-end font-bold sm:text-[3.2vw] text-[6vw] bg-secondary leading-normal'>
        P R<br />O J<br />E C<br />T S
      </div>

      <div className='ease-in-out duration-500 transform flex flex-col justify-end sm:text-[1.6vw] text-[3vw]
            group-hover: flex-grow w-0 sm:p-5 p-2 overflow-hidden'>
              <span
                className='delay-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200'>
                PROFESSIONAL
              </span>
        <div id='reverse-scroll'
             className='w-full vertical-rl rotate-180 overflow-x-scroll overflow-y-hidden sm:pb-20 pb-10 whitespace-nowrap'>
          {list.map((item, i) => <div key={i}>{item}</div>)}
        </div>
      </div>

    </div>
  );
};
