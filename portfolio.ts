import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Taif Aldehbash',
  title: "Hi all, I'm Taif",
  description:
    "I'm passionate Software Engineer having an experience of Mobile application development with Flutter, Swift, Android and Web application development with Flutter, HTML, JavaScript, PHP, and NodeJs Framework.",
  //resumeLink:
  //  'https://drive.google.com/file/d/1QJlJR7jKSnIs2CC2idFV49zx44nz_43J/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'TaifAldehbash',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'mailto:taifmaldehbash@gmail.com',
  linkedin: 'https://www.linkedin.com/in/taif-aldehbash',
  github: 'https://github.com/TaifAldehbash',

};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'A SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/Dev.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive web applications'
        ),
        emoji('⚡ Building responsive static websites'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nodetjs',
          fontAwesomeClassName: 'logos:nodejs',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Mobile Applications',
      lottieAnimationFile: '/lottie/skills/MobileDev.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing IOS applications using Flutter & SwiftUI'
        ),
        emoji(
          '⚡ Experience in developing Android applications using Android Studio & Java'
        ),
        emoji(
          '⚡ Experience in developing AR applications using Unity & Flutter'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Flutter',
          fontAwesomeClassName: 'logos:flutter',
        },
        {
          skillName: 'Swift',
          fontAwesomeClassName: 'logos:swift',
        },
        {
          skillName: 'Android Studio',
          fontAwesomeClassName: 'logos:android',
        },
        {
          skillName: 'Java',
          fontAwesomeClassName: 'logos:java',
        },
        {
          skillName: 'Unity',
          fontAwesomeClassName: 'logos:unity',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji('⚡ Experience of integrating databases with mobile applications'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Alibaba Cloud',
          fontAwesomeClassName: 'simple-icons:alibabacloud',
        },
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'IBM Cloud',
          fontAwesomeClassName: 'simple-icons:ibmcloud',
        },
        {
          skillName: 'Google Cloud',
          fontAwesomeClassName: 'logos:google-cloud',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
      ],
    },

  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Fullstack Development', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Mobile Application Development',
    progressPercentage: '90',
  },
  {
    Stack: 'Cloud Computing',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'King Saud University',
    subHeader: 'Bachelor of Science in Software Engineering',
    duration: '2022',
    desc: 'Full familiarity in how to manage and create a software project from creating plans and proposals, taking requirements, designing the project, implementation and testing, to delivery and maintenance by working in the Software Development Life Cycle (SDLC).',
    grade: 'Grade A',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Trainee',
    company: 'Amlak International',
    companyLogo: '/img/icons/common/amlakInt.jpg',
    date: 'Dec 2022 – May 2023',
    desc: '',
  },
  {
    role: 'Software Emgineer Intern',
    company: 'Communication Experts Ltd',
    companyLogo: '/img/icons/common/commExperts.jpg',
    date: 'May 2021 – Jul 2021',
    desc: '',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'My Portfolio',
    desc: 'Software Developer Portfolio built with react.js and next.js bootstrap that showcase my work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    // link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

//export const feedbacks: FeedbackType[] = [];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Taif Alddehbash',
  description:
    'A passionate Software Engineer.',
  author: 'Taif Aldehbash',
  image: 'https://i.ibb.co/7WCpYCr/profile-Memoji.png',
  //url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Taif',
    'Taif Aldehbash',
    '@TaifAldehbash',
    'TaifAldehbash',
    'Portfolio',
    'Taif Portfolio ',
    'Taif Aldehbash Portfolio',
  ],
};
