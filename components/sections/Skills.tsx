import React from 'react';
import Image from 'next/image';

import Js from '../public/assets/skills/programmingLanguages/js.png';
import Ts from '../public/assets/skills/programmingLanguages/ts.png';
import Kotlin from '../public/assets/skills/programmingLanguages/kotlin.png';
import PHP from '../public/assets/skills/programmingLanguages/php.webp';
import Sql from '../public/assets/skills/programmingLanguages/sql.png';

import Adonis from '../public/assets/skills/backend/adonis.png';
import Express from '../public/assets/skills/backend/express.png';
import Firebase from '../public/assets/skills/backend/firebase.png';
import Laravel from '../public/assets/skills/backend/laravel.png';
import Node from '../public/assets/skills/backend/node.jpg';
import Nest from '../public/assets/skills/backend/nestjs.jpg';
import Mongo from '../public/assets/skills/backend/mongo.png';
import MySQL from '../public/assets/skills/backend/mysql.png';
import SqlServer from '../public/assets/skills/backend/sqlserver.svg';

import HTML from '../public/assets/css-html.png';
import Reactlogo from '../public/assets/skills/frontend/react.png';
import Nextjs from '../public/assets/skills/frontend/nextjs.webp';
import Tailwind from '../public/assets/skills/frontend/tailwind.png';
import Bootstrap from '../public/assets/skills/frontend/bootstrap.png';
import Material from '../public/assets/skills/frontend/material.png';
import Sass from '../public/assets/skills/frontend/sass.png';

export const Skills = () => {
  return (
    <div id="skills" className="w-full  p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="font-bold text-xl tracking-widest uppercase text-blue-500">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <p className="font-bold text-xl tracking-widest uppercase text-blue-500 py-6">
          Languages
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Js} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Ts} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={PHP} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>PHP</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Kotlin} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Kotlin</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Sql} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>
        </div>
        <p className="font-bold text-xl tracking-widest uppercase text-blue-500 py-6">
          Backend
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Nodejs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Express} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Expressjs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Nest} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Nestjs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Adonis} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Adonis</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Laravel} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Laravel</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={SqlServer} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>SqlServer</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MySQL} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Mongo</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
        </div>

        <p className="font-bold text-xl tracking-widest uppercase text-blue-500 py-6">
          Frontend
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>HTML + CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Sass} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>SASS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Reactlogo} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Reactjs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Nextjs} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Nextjs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Material} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#39393f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Bootstrap} width="100" height="100" alt="HTML" />
              </div>
              <div className="flex flex-col item-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
