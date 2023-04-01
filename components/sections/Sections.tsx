import React from 'react';
import { Experience } from './Experience';

const Sections = () => {
  return (
    <>
      <div className="bg-[var(--primary-color-dark)] w-full py-3 flex items-center justify-center">
        <button className="w-[12rem]">Experiences</button>
        <button className="from-[var(--bg-color)] to-[var(--bg-color)] text-[var(--secondary-color)] w-[12rem] border-[var(--secondary-color)] border-2">
          Skills
        </button>
        <button className="from-[var(--bg-color)] to-[var(--bg-color)] text-[var(--secondary-color)] w-[12rem] border-[var(--secondary-color)] border-2">
          Education
        </button>
        <button className="from-[var(--bg-color)] to-[var(--bg-color)] text-[var(--secondary-color)] w-[12rem] border-[var(--secondary-color)] border-2">
          Hackathoons
        </button>
        <button className="from-[var(--bg-color)] to-[var(--bg-color)] text-[var(--secondary-color)] w-[12rem] border-[var(--secondary-color)] border-2">
          Projects
        </button>
      </div>
      <div>
        <Experience />
      </div>
    </>
  );
};

export default Sections;
