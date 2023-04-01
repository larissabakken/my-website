import React, { useState, useEffect } from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export const Main = () => {
  const gitHub = 'https://github.com/ramos-larissa';
  const linkedIn = 'https://www.linkedin.com/in/lsramos95/';
  const email = 'mailto:lsramos.cdc@gmail.com';

  const handleDownload = () => {
    const pdf = '/resume.pdf';
    window.open(pdf);
  };

  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className='pt-10'>
          <h1 className="py-2 text-white-800">
            Hi, I'm <span className="text-blue-500">Larissa</span>
          </h1>
          <h1 className="py-2 text-white-800">
            A <span className="text-blue-500">FullStack</span> Developer
          </h1>
          <p className="py-4 text-white-600 max-w-[70%] m-auto">
            Fullstack || Backend || Frontend || Javascript || Typescript ||
            NodeJs || ExpressJS || NestJs || ReactJS || Nextjs || Golang
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href={gitHub} target="_blank">
              <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                <FaGithub />
              </div>
            </Link>
            <Link href={linkedIn} target="_blank">
              <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                <FaLinkedin />
              </div>
            </Link>
            <Link href={email} target="_blank">
              <div className="rounded-full shadow-lg shadow-blue-500 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                <AiOutlineMail />
              </div>
            </Link>
          </div>

          <div className='m-5'>
            <button
              onClick={handleDownload}
            >
              Resume
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
