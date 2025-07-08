import mysqlDark from '@/assets/icons/dark/MySQL.svg';
import mysqlLight from '@/assets/icons/light/MySQL.svg';

import postgresqlDark from '@/assets/icons/dark/PostgreSQL.svg';
import postgresqlLight from '@/assets/icons/light/PostgreSQL.svg';

import vueDark from '@/assets/icons/dark/VueJS.svg';
import vueLight from '@/assets/icons/light/VueJS.svg';

import reactDark from '@/assets/icons/dark/React.svg';
import reactLight from '@/assets/icons/light/React.svg';

import typescriptDark from '@/assets/icons/dark/TypeScript.svg';
import typescriptLight from '@/assets/icons/light/TypeScript.svg';

import javascriptDark from '@/assets/icons/dark/JavaScript.svg';
import javascriptLight from '@/assets/icons/light/JavaScript.svg';

import nodejsDark from '@/assets/icons/dark/NodeJS.svg';
import nodejsLight from '@/assets/icons/light/NodeJS.svg';

import nestjsDark from '@/assets/icons/dark/NestJS.svg';
import nestjsLight from '@/assets/icons/light/NestJS.svg';

import phpDark from '@/assets/icons/dark/PHP.svg';
import phpLight from '@/assets/icons/light/PHP.svg';

import laravelDark from '@/assets/icons/dark/Laravel.svg';
import laravelLight from '@/assets/icons/light/Laravel.svg';

import htmlDark from '@/assets/icons/dark/HTML.svg';
import htmlLight from '@/assets/icons/light/HTML.svg';

import cssDark from '@/assets/icons/dark/CSS.svg';
import cssLight from '@/assets/icons/light/CSS.svg';

import bootstrapDark from '@/assets/icons/dark/Bootstrap.svg';
import bootstrapLight from '@/assets/icons/light/Bootstrap.svg';

import tailwindDark from '@/assets/icons/dark/TailwindCSS.svg';
import tailwindLight from '@/assets/icons/light/TailwindCSS.svg';

import gitDark from '@/assets/icons/dark/Git.svg';
import gitLight from '@/assets/icons/light/Git.svg';

import githubDark from '@/assets/icons/dark/Github.svg';
import githubLight from '@/assets/icons/light/Github.svg';

import figmaDark from '@/assets/icons/dark/Figma.svg';
import figmaLight from '@/assets/icons/light/Figma.svg';

import postmanDark from '@/assets/icons/dark/Postman.svg';
import postmanLight from '@/assets/icons/light/Postman.svg';

import vscodeDark from '@/assets/icons/dark/VSCode.svg';
import vscodeLight from '@/assets/icons/light/VSCode.svg';

import gcpDark from '@/assets/icons/dark/GCP.svg';
import gcpLight from '@/assets/icons/light/GCP.svg';

import jqueryDark from '@/assets/icons/dark/JQuery.svg';
import jqueryLight from '@/assets/icons/light/JQuery.svg';

// Optional
// import cppLight from '@/assets/icons/light/CPP.svg';
// import cppDark from '@/assets/icons/dark/CPP.svg';

export interface TechIcon {
  id: string;
  name: string;
  dark: string;
  light: string;
}

export const techIcons: TechIcon[] = [
  { id: 'mysql', name: 'MySQL', dark: mysqlDark, light: mysqlLight },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    dark: postgresqlDark,
    light: postgresqlLight,
  },
  { id: 'vue', name: 'Vue.js', dark: vueDark, light: vueLight },
  { id: 'react', name: 'React', dark: reactDark, light: reactLight },
  {
    id: 'typescript',
    name: 'TypeScript',
    dark: typescriptDark,
    light: typescriptLight,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    dark: javascriptDark,
    light: javascriptLight,
  },
  { id: 'nodejs', name: 'Node.js', dark: nodejsDark, light: nodejsLight },
  { id: 'nestjs', name: 'NestJS', dark: nestjsDark, light: nestjsLight },
  { id: 'php', name: 'PHP', dark: phpDark, light: phpLight },
  { id: 'laravel', name: 'Laravel', dark: laravelDark, light: laravelLight },
  { id: 'html', name: 'HTML', dark: htmlDark, light: htmlLight },
  { id: 'css', name: 'CSS', dark: cssDark, light: cssLight },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    dark: bootstrapDark,
    light: bootstrapLight,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    dark: tailwindDark,
    light: tailwindLight,
  },
  { id: 'git', name: 'Git', dark: gitDark, light: gitLight },
  { id: 'github', name: 'GitHub', dark: githubDark, light: githubLight },
  { id: 'figma', name: 'Figma', dark: figmaDark, light: figmaLight },
  { id: 'postman', name: 'Postman', dark: postmanDark, light: postmanLight },
  { id: 'vscode', name: 'VS Code', dark: vscodeDark, light: vscodeLight },
  { id: 'gcp', name: 'GCP', dark: gcpDark, light: gcpLight },
  { id: 'jquery', name: 'jQuery', dark: jqueryDark, light: jqueryLight },
  // Optional:
  // { id: 'cpp', name: 'C++', dark: cppDark, light: cppLight },
];
