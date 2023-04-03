import React, {useState} from 'react';
import { motion } from 'framer-motion';

import { Experience } from './Experience';
import { Skills } from './Skills';
import { Projects } from './Projects';

const Sections = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const transition = {
    duration: 0.2,
    ease: 'easeInOut',
  };

  return (
    <div className='min-h-screen'>
      <div className="bg-[var(--primary-color-dark)] w-full py-3 flex items-center justify-center">
        <button onClick={() => setActiveSection("experience")} className="w-[12rem]">Experiences</button>

        <button onClick={() => setActiveSection("skills")} className="from-[var(--bg-color)] to-[var(--bg-color)] text-[var(--secondary-color)] w-[12rem] border-[var(--secondary-color)] border-2">
          Skills
        </button>

        <button onClick={() => setActiveSection("education")} className="from-[var(--bg-color)] to-[var(--bg-color)] text-[var(--secondary-color)] w-[12rem] border-[var(--secondary-color)] border-2">
          Education
        </button>
        <button onClick={() => setActiveSection("hackathoons")} className="from-[var(--bg-color)] to-[var(--bg-color)] text-[var(--secondary-color)] w-[12rem] border-[var(--secondary-color)] border-2">
          Hackathoons
        </button>
        <button onClick={() => setActiveSection("projects")} className="from-[var(--bg-color)] to-[var(--bg-color)] text-[var(--secondary-color)] w-[12rem] border-[var(--secondary-color)] border-2">
          Projects
        </button>
      </div>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="mt-4">
        
      { 
        activeSection === 'experience' ? <Experience /> :
        activeSection === 'skills' ? <Skills/> :
        activeSection === 'education' ? <h1>teste proj</h1> :
        activeSection === 'hackathoons' ? <h1>teste proj</h1> :
        activeSection === 'projects' ? <Projects /> : null 
      }

      </motion.div>
    </div>
  );
};

export default Sections;
