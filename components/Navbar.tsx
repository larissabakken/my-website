import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import Logo from '../public/assets/js.png';

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-28 shadow-xl z-[108]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="shadow-2xl shadown-gray-400 p-3 cursor-pointer">
          <Image src={Logo} height="70" alt="Logo" />
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm hover:border-b">About</li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 text-sm hover:border-b">Skills</li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-sm hover:border-b">Projects</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={!nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
      >
        <div
          className={
            !nav
              ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="shadow-2xl shadown-gray-400 p-3 cursor-pointer">
                <Image src={Logo} height="50" alt="Logo" />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadown-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={18} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%} md:w-[90%] py-4">
                Lets build something legendary here!
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul>
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/about">
                  <li className="py-4 text-sm ">About</li>
                </Link>
                <Link href="/skills">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/projects">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
