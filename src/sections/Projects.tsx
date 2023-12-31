import { twMerge } from 'tailwind-merge';
import content from '~/assets/content.json';
import { useEffect, useState } from "react";

interface ProjectsContent {
  title: string;
  list: { name: string, selected: boolean, tech: string[] }[];
}

interface ProjectsProps {
  className?: string;
  selectedTech: string[];
}

export const Projects = ({ className, selectedTech }: ProjectsProps) => {
  const { title, list } = content.projects as ProjectsContent;
  const [projectList, setProjectList] = useState(list);

  useEffect(() => {
    if (selectedTech.length !== 0) {
      const modifiedList = list.map(project => {
        const isSelected = project.tech.some(tech =>
          selectedTech.map(t => t.toLowerCase()).includes(tech.toLowerCase())
        );
        return {
          ...project,
          selected: isSelected
        };
      });
      setProjectList(modifiedList);
    } else {
      const resetList = list.map(project => ({ ...project, selected: true }));
      setProjectList(resetList);
    }
  }, [list, selectedTech]);

  return (
    <div className={twMerge('justify-end flex col-span-3 row-span-1 group sm:pl-0 pl-8', className)}>
      <div className='flex flex-none items-end font-bold sm:text-[3.2vw] text-[6vw] leading-normal'>
        P R<br />O J<br />E C<br />T S
      </div>

      <div className={`ease-in-out duration-500 transform flex flex-col justify-end sm:text-[1.6vw] text-[3vw]
       w-0 sm:p-5 p-2 overflow-hidden ${selectedTech.length > 0 ? 'flex-grow' : 'group-hover:flex-grow'}`}>
              <span
                className={twMerge(
                  'delay-300 transform translate-y-2 opacity-0 duration-200',
                  selectedTech.length > 0 ? 'translate-y-0 opacity-100' : 'group-hover:translate-y-0 group-hover:opacity-100')}>
                PROFESSIONAL
              </span>
        <div id='reverse-scroll'
             className='w-full vertical-rl rotate-180 overflow-x-scroll overflow-y-hidden sm:pb-20 pb-10 whitespace-nowrap'>
          {projectList.map((item, i) =>
            <div className={item.selected ? 'opacity-100' : 'opacity-25'} key={i}>{item.name}</div>
          )}
        </div>
      </div>

    </div>
  );
};
