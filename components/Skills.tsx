import React from 'react';
import Image from 'next/image';

import HTML from '../public/assets/css-html.png';

export const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-blue-500">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>HTML + CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>HTML + CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>HTML + CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>HTML + CSS</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
