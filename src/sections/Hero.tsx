import { twMerge } from 'tailwind-merge';
import content from '~/assets/content.json';

interface HeroContent {
  title: string;
  description: string;
  link: string;
}

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const { title, description, link } = content.hero as HeroContent;

  return (
    <div className={twMerge('grid', className)}>
      <a href={link} className='row-span-1 center-content font-bold sm:text-[6vw] text-[10vw]'>{title}</a>
      <div className='row-span-2 sm:p-5 p-0 sm:px-10 px-7 text-justify sm:text-[1.6vw] text-[2.8vw] tracking-tight'>
        {description}
      </div>
    </div>
  );
};
