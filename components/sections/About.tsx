import React from 'react';

const picture = '/assets/profile.jpeg';

export const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center py-6">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase text-[var(--primary-color)]">About</h2>
          <h3 className="py-3 text-[var(--secondary-color)]">Who I Am</h3>
          <p className="py-2">
            I am a skilled software engineer with several years of experience
            working with diverse teams on various projects. My expertise
            includes server-side development, building RESTful APIs, and working
            with Node.js frameworks such as Express, Nestjs, and Fastify, as
            well as PHP frameworks like Laravel, Lumen, and Zend. I also possess
            strong frontend skills, including proficiency in Reactjs, Nextjs,
            tailwind, material ui, bootstrap, angularjs, vuejs, html, css, and
            sass. Technology is my passion, and my ultimate goal is to become a
            software architect. <br /> Currently, I am learning GoLang to expand
            my knowledge and skillset. In addition to my technical abilities, I
            have a C1 level of English proficiency and I am currently studying
            Norwegian A1. <br />I have excellent hard skills, including
            proficiency in JavaScript, TypeScript, Node.js, PHP, HTML, CSS,
            SASS, SQL, NoSQL, and Git. I also have experience working with
            Shopify and Vtex. <br />
            Moreover, I possess strong soft skills that allow me to excel in
            collaborative work environments. <br />I am an effective
            communicator, proactive, able to work well in teams, and capable of
            managing my work independently. I am always eager to take on new
            challenges and continue to grow my skills as a software engineer.
          </p>
          <p className="py-2">
            Please feel free to reach out to me to discuss any potential
            opportunities or collaborations.
          </p>
          <div className="col-span-1">
          <p className="py-2 uppercase font-bold text-xl tracking-widest text-[var(--primary-color)]">
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
            || <span className="font-thin">2020 - Uncompleted</span>
          </p>
          </div>
          <div className="col-span-1">
          <p className="py-2 uppercase font-bold text-xl tracking-widest text-[var(--primary-color)]">
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
            <span className="font-bold">CPBS Tempos de mudanças</span> - 2st
            place || <span className="font-thin"> 2019</span>
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
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-500 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-500">
          <img className="rounded-xl" src={picture} alt="Larissa" />
        </div>
      </div>
    </div>
  );
};
