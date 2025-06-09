import { twMerge } from "tailwind-merge";
import content from "~/assets/content.json";
import { Selectable } from "~/components/Selectable";

interface TechContent {
  title: string;
  name: string;
  fromYear: string;
  list: string[];
}

interface TechProps {
  className?: string;
  handleTechFilter: (tech: string) => void;
}

export const Tech = ({ className, handleTechFilter }: TechProps) => {
  const { title, name, fromYear, list } = content.tech as TechContent;

  return (
    <div className={twMerge("grid border-l-2 border-primary", className)}>
      <div className="col-span-2 m-3 mb-6 mr-0 mt-0 overflow-x-hidden overflow-y-scroll pr-2 text-[3vw] sm:m-5 sm:mb-14 sm:mr-0 sm:text-[1.6vw]">
        {list.map((item, i) => (
          <Selectable onClick={handleTechFilter} className="pl-2" key={i}>
            {item}
          </Selectable>
        ))}
      </div>

      <div className="col-span-3 row-span-1 mb-4 grid grid-rows-2">
        <div className="row-span-1 border-b-2 border-primary p-2 text-[9vw] font-bold text-bottom sm:p-5 sm:text-[6vw]">
          {title}
        </div>
        <div className="row-span-1 max-w-fit">
          <p className="pl-3 pt-3 text-[3vw] font-bold tracking-widest sm:pl-5 sm:pt-5 sm:text-[1.8vw]">
            T H E O<br />C A R R A R A
          </p>
          <div className="m-3 mt-1 text-[2vw] sm:m-5 sm:mt-3 sm:text-[1.3vw]">
            {fromYear}-{new Date().getFullYear()}
          </div>
          <div className="ml-5 flex items-center gap-2">
            <a
              href="mailto:theo@codicem.dev"
            >
              <img src="/email.svg" alt="Email" className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/theocarrara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Timer00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.svg" alt="GitHub" className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
