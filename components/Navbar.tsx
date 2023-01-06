import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../public/assets/js.png';

export const Navbar = () => {
  return (
    <div className="fixed w-full h-28 shadow-xl z-[108]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={Logo} height="70" alt="Logo" />
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
          <div className="md:hidden">
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};
