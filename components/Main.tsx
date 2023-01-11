import React from 'react';

export const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="py-2 uppercase text-sm tracking-widest text-gray-600">
            Let's build something great together.
          </p>
          <h1 className="py-2 text-gray-800">
            Hi, I'm <span className="text-blue-500">Larissa</span>
          </h1>
          <h1 className="py-2 text-gray-800">
            A <span className="text-blue-500">FullStack</span> Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            non dolorem repudiandae dolore cum, hic iste sequi animi totam
            magnam, id nobis. Veniam, id culpa est excepturi at vero
            repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
};
