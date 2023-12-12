import React, { useState } from 'react';
import Link from 'next/link';

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiCodeView } from 'react-icons/ri';

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const gitHub = 'https://github.com/larissabakken';
  const linkedIn = 'https://www.linkedin.com/in/lsramos95/';
  const email = 'mailto:larissabakken@gmail.com';

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDownload = () => {
    const pdf = '/resume.pdf';
    window.open(pdf);
  };

  return (
    <div className="fixed w-full h-[5rem] shadow-xl z-[108]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[var(--bg-color-light)]">
        <div className="hidden md:flex p-2 cursor-pointer rounded-full shadow-lg shadow-[var(--primary-color)]">
          <RiCodeView size={20} />
        </div>
        <div>
          <ul className="hidden md:flex mr-9">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm hover:border-b">Skills</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          !nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            !nav
              ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w[60%] md:w[45%] h-screen bg-[#2b2b30] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="rounded-full shadow-lg shadow-[var(--primary-color)] p-3">
                <RiCodeView size={20} />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[var(--secondary-color-dark)] p-3"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%} md:w-[90%] py-6">
                Hi, I'm Larissa Ramos
                <br />A FullStack Developer.
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul>
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm ">About</li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
              </ul>

              <div className="pt-10">
                <p className="uppercase tracking-widest text-[var(--secondary-color)] font-bold">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <Link href={gitHub} target="_blank">
                    <div className="rounded-full shadow-lg shadow-[var(--secondary-color)] p-4 ">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href={linkedIn} target="_blank">
                    <div className="rounded-full shadow-lg shadow-[var(--secondary-color)] p-4 ">
                      <FaLinkedin />
                    </div>
                  </Link>
                  <Link href={email} target="_blank">
                    <div className="rounded-full shadow-lg shadow-[var(--secondary-color)] p-4 ">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full flex items-center justify-center pt-10 pb-3">
                <button onClick={handleDownload}>Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
