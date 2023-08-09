import { twMerge } from 'tailwind-merge';
import content from '~/assets/content.json';
import { visit } from "yaml/dist/parse/cst-visit";
import itemAtPath = visit.itemAtPath;
import { useEffect, useState } from "react";

interface ProjectsContent {
  title: string;
  list: { name: string, tech: string[]}[];
}

interface ProjectsProps {
  className?: string;
  selectedTech: string[];
}

export const Projects = ({ className, selectedTech }: ProjectsProps) => {
  const { title, list } = content.projects as ProjectsContent;
  const [projectList, setProjectList ] = useState(list);

  useEffect(()=>{
    console.log(selectedTech);
    if (selectedTech.length !== 0) {
      const filteredList = list.filter(project => project.tech.some(tech =>
        selectedTech.map(t => t.toLowerCase()).includes(tech.toLowerCase())));
      setProjectList(filteredList);
    } else {
      setProjectList(list);
    }
  }, [selectedTech])

  useEffect(()=>console.log(projectList), [projectList]);

  return (
    <div className={twMerge('justify-end flex col-span-3 row-span-1 group sm:pl-0 pl-8', className)}>
      <div className='flex flex-none items-end font-bold sm:text-[3.2vw] text-[6vw] leading-normal'>
        P R<br />O J<br />E C<br />T S
      </div>

      <div className='ease-in-out duration-500 transform flex flex-col justify-end sm:text-[1.6vw] text-[3vw]
            group-hover:flex-grow w-0 sm:p-5 p-2 overflow-hidden'>
              <span
                className='delay-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200'>
                PROFESSIONAL
              </span>
        <div id='reverse-scroll'
             className='w-full vertical-rl rotate-180 overflow-x-scroll overflow-y-hidden sm:pb-20 pb-10 whitespace-nowrap'>
          {projectList.map((item, i) => <div key={i}>{item.name}</div>)}
        </div>
      </div>

    </div>
  );
};
