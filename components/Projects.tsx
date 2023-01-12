import React from 'react';
import { ProjectItems } from './ProjectItems';

export const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="font-bold text-xl tracking-widest uppercase text-blue-500">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <ProjectItems />
        </div>
      </div>
    </div>
  );
};
