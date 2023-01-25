import React from 'react';

const picture ='/assets/profile.jpeg';

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-6">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase font-bold text-xl tracking-widest text-blue-500">
            About
          </p>
          <h3 className="py-3">Who I Am</h3>
          <p className="py-2">
            Coding on Javascript and dreaming on Javascript. I have been working
            for various teams with different projects, gaining experience with
            different Technologies. Technology is one of my passions, share
            knowledge and learn new things it’s my motivation! I’m currently
            learning/focusing in my Backend skills (nodejs and kotlin).
          </p>
          <p className="py-2">I am always looking to improve my knowledge!</p>
          <p className="py-2 uppercase font-bold text-xl tracking-widest text-blue-500">
            EDUCATION || CERTIFICATIONS
          </p>
          <p className="py-2">
            <span className="font-bold">IBM Fullstack Developer</span> -
            Professional certificate guided by experts at IBM. ||{' '}
            <span className="font-thin">2022 - 2023</span>
          </p>
          <p className="py-2">
            <span className="font-bold">
              Uniceub - Software analysis and development
            </span>{' '}
            || <span className="font-thin">2020 - 2023</span>
          </p>
          <p className="py-2 uppercase font-bold text-xl tracking-widest text-blue-500">
            Hackathons
          </p>
          <p className="py-2">
            <span className="font-bold">CPMG BNDES</span> - 3st place ||{' '}
            <span className="font-thin">2018</span>
          </p>
          <p className="py-2">
            <span className="font-bold">CPBR Jandaia</span> - 1st place ||{' '}
            <span className="font-thin"> 2019</span>
          </p>
          <p className="py-2">
            <span className="font-bold">CPBS Tempos de mudanças</span> - 2st place ||{' '} 
            <span className="font-thin"> 2019</span>
          </p>
          <p className="py-2">
            <span className="font-bold">CPBS Aprender Bem</span> - 2st place ||{' '}
            <span className="font-thin"> 2019</span>
          </p>
          <p className="py-2">
            <span className="font-bold">CPBS Zé Gotinha</span> - 1st place ||{' '}
            <span className="font-thin"> 2019</span>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-500 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-500">
          <img className="rounded-xl" src={picture} alt="Larissa" />
        </div>
      </div>
    </div>
  );
};
