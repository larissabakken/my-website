import React from 'react';
import Timeline from '../subComponents/Timeline';
import { Skills } from './Skills';

export const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full h-full p-2 flex items-center py-6 row-auto"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2">
        <div className="col-span-2">
          <Timeline />
        </div>
      </div>
    </div>
  );
};
