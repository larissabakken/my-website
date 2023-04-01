import React, { useState } from 'react';
import Link from 'next/link';
import { ModalCV } from './ModalCV';

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import { RiCodeView } from 'react-icons/ri';

export const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [show, setShow] = useState(false);

  const gitHub = 'https://github.com/ramos-larissa';
  const linkedIn = 'https://www.linkedin.com/in/lsramos95/';
  const email = 'mailto:lsramos.cdc@gmail.com';

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-28 shadow-xl z-[108]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="p-3 cursor-pointer rounded-full shadow-lg shadow-blue-500">
          <RiCodeView size={25} />
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm hover:border-b">Skills</li>
            </Link>
            {/* <Link href="/projects">
              <li className="ml-10 text-sm hover:border-b">Projects</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm hover:border-b">Contact</li>
            </Link> */}
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
              <div className="rounded-full shadow-lg shadow-blue-500 p-3">
                <RiCodeView size={20} />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-blue-500 p-3"
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
                {/* <Link href="/#projects">
                  <li className="py-4 text-sm">Projects</li>
                </Link> */}
                {/* <Link href="/contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link> */}
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <Link href={gitHub} target="_blank">
                    <div className="rounded-full shadow-lg shadow-blue-500 p-4 ">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href={linkedIn} target="_blank">
                    <div className="rounded-full shadow-lg shadow-blue-500 p-4 ">
                      <FaLinkedin />
                    </div>
                  </Link>
                  <Link href={email} target="_blank">
                    <div className="rounded-full shadow-lg shadow-blue-500 p-4 ">
                      <AiOutlineMail />
                    </div>
                  </Link>

                  <div
                    className="rounded-full shadow-lg shadow-blue-500 p-4 "
                    onClick={() => setShow(true)}
                  >
                    <BsPersonLinesFill />
                  </div>
                  <ModalCV onClose={() => setShow(false)} show={show} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
