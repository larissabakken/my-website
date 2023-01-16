import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';

export const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="py-2 uppercase text-sm tracking-widest text-white-300">
            Let's build something great together.
          </p>
          <h1 className="py-2 text-white-800">
            Hi, I'm <span className="text-blue-500">Larissa</span>
          </h1>
          <h1 className="py-2 text-white-800">
            A <span className="text-blue-500">FullStack</span> Developer
          </h1>
          <p className="py-4 text-white-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            non dolorem repudiandae dolore cum, hic iste sequi animi totam
            magnam, id nobis. Veniam, id culpa est excepturi at vero
            repudiandae.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
