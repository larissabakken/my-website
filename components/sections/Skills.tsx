import React from 'react';
import Image from 'next/image';

import Timeline from '../subComponents/Timeline';

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
      <h1>Teste</h1>
      <div>
        <Timeline />
      </div>
    </div>
  );
};
