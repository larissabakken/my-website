import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import teste from '../public/assets/about.jpg';

export const ProjectItems = () => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#252529] to-[#3d3d41]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={teste}
        alt="teste"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          Tittle
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React.js</p>
        <Link href="/">
          <p className="p-8 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};
