import React, { useState, useEffect } from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export const Main = () => {
  const gitHub = 'https://github.com/larissabakken';
  const linkedIn = 'https://www.linkedin.com/in/lsramos95/';
  const email = 'mailto:larissabakken@gmail.com';

  const handleDownload = () => {
    const pdf = '/resume.pdf';
    window.open(pdf);
  };

  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-10">
          <h1 className="py-2">
            Hi, I'm <span className="text-[var(--primary-color)]">Larissa</span>
          </h1>
          <h1 className="py-2">
            A <span className="text-[var(--primary-color)]"> FullStack </span>{' '}
            Developer
          </h1>
          <p className="py-4 text-white-600 m-auto">
            Fullstack || Backend || Frontend || Javascript || Typescript ||
            NodeJs || ExpressJS || NestJs || ReactJS || Nextjs || Golang
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href={gitHub} target="_blank">
              <div className="rounded-full shadow-lg shadow-[var(--secondary-color)] p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                <FaGithub size={25} />
              </div>
            </Link>
            <Link href={linkedIn} target="_blank">
              <div className="rounded-full shadow-lg shadow-[var(--secondary-color)] p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                <FaLinkedin size={25} />
              </div>
            </Link>
            <Link href={email} target="_blank">
              <div className="rounded-full shadow-lg shadow-[var(--secondary-color)] p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                <AiOutlineMail size={25} />
              </div>
            </Link>
          </div>

          <div className="m-5">
            <button className="w-[12rem]" onClick={handleDownload}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
