import React from "react";
import Section from "../4_templates/Section";
import Image from "next/image";
import { Separator } from "../ui/separator";

const TechStack = () => {
  const category1 = [
    {
      id: 1,
      src: "/techStack/color/html5.svg",
      label: "HTML",
    },
    {
      id: 1,
      src: "/techStack/color/css3.svg",
      label: "CSS",
    },
    {
      id: 3,
      src: "/techStack/color/js.svg",
      label: "JavaScript",
    },
    {
      id: 4,
      src: "/techStack/color/typescript/typescript.svg",
      label: "TypeScript",
    },
    {
      id: 1,
      src: "/techStack/color/reactjs/reactjs.svg",
      label: "React",
    },
    {
      id: 1,
      src: "/techStack/color/vitejs/vitejs.svg",
      label: "Vite",
    },
    {
      id: 2,
      src: "/techStack/color/nextjs2/nextjs2.svg",
      label: "NEXT.js",
    },
    {
      id: 1,
      src: "/techStack/color/tailwindcss/tailwindcss.svg",
      label: "Tailwind CSS",
    },
    {
      id: 1,
      src: "/techStack/color/nodejs/nodejs.svg",
      label: "Node.js",
    },
    {
      id: 1,
      src: "/techStack/color/npm2/npm2.svg",
      label: "NPM",
    },
    {
      id: 1,
      src: "/techStack/color/shadcnui/shadcnui.svg",
      label: "shadcn",
    },
    {
      id: 1,
      src: "/techStack/color/reactrouter/reactrouter.svg",
      label: "React Router",
    },
    {
      id: 1,
      src: "/techStack/color/redux/redux.svg",
      label: "Redux",
    },
    {
      id: 1,
      src: "/techStack/color/python/python.svg",
      label: "Python",
    },
    {
      id: 1,
      src: "/techStack/color/postman/postman.svg",
      label: "Postman",
    },
    {
      id: 1,
      src: "/techStack/color/supabase/supabase.svg",
      label: "Supabase",
    },
  ];

  const category2 = [
    {
      id: 1,
      src: "/techStack/color/vscode/vscode.svg",
      label: "VS Code",
    },
    {
      id: 1,
      src: "/techStack/color/prettier/prettier.svg",
      label: "Prettier",
    },
    {
      id: 1,
      src: "/techstack/color/chrome/chrome.svg",
      label: "Chrome",
    },
    {
      id: 1,
      src: "/techStack/color/edge.svg",
      label: "Edge",
    },
    {
      id: 1,
      src: "/techStack/color/git.svg",
      label: "Git",
    },
    {
      id: 1,
      src: "/techStack/color/github.svg",
      label: "GitHub",
    },
    {
      id: 1,
      src: "/techStack/color/figma.svg",
      label: "Figma",
    },
    {
      id: 1,
      src: "/techStack/color/canva/canva.svg",
      label: "Canva",
    },
    {
      id: 1,
      src: "/techStack/color/markdown/markdown.svg",
      label: "Markdown",
    },
    {
      id: 1,
      src: "/techStack/color/openai/openai.svg",
      label: "OpenAI",
    },
    {
      id: 1,
      src: "/techStack/color/insomnia.svg",
      label: "Insomnia",
    },
    {
      id: 1,
      src: "/techStack/color/swagger/swagger.svg",
      label: "Swagger",
    },
    {
      id: 1,
      src: "/techStack/color/netlify2/netlify2.svg",
      label: "Netlify",
    },
    {
      id: 1,
      src: "/techStack/color/jira.svg",
      label: "Jira",
    },
    {
      id: 1,
      src: "/techStack/color//miro/miro.svg",
      label: "Miro",
    },
    {
      id: 1,
      src: "/techStack/color/slack/slack.svg",
      label: "Slack",
    },
  ];

  const category3 = [
    {
      id: 1,
      src: "/techStack/color/docker.svg",
      label: "Docker",
    },
    {
      id: 1,
      src: "/techStack/color/electron.svg",
      label: "Electron.js",
    },
    {
      id: 1,
      src: "/techStack/color/flask.svg",
      label: "Flask",
    },
    {
      id: 1,
      src: "/techStack/color/jest.svg",
      label: "Jest",
    },
    {
      id: 1,
      src: "/techStack/color/mongodb/mongodb.svg",
      label: "MongoDB",
    },
    {
      id: 1,
      src: "/techStack/color/mysql/mysql.svg",
      label: "MySQL",
    },
    {
      id: 1,
      src: "/techStack/color/php/php.svg",
      label: "PHP",
    },
    {
      id: 1,
      src: "/techStack/color/postgresql/postgresql.svg",
      label: "PostgreSQL",
    },
    {
      id: 1,
      src: "/techStack/color/reactquery/reactquery.svg",
      label: "React Query",
    },
    {
      id: 1,
      src: "/techStack/color/sass/sass.svg",
      label: "SASS",
    },
    {
      id: 1,
      src: "/techStack/color/threejs/threejs.svg",
      label: "Three.js",
    },
    {
      id: 1,
      src: "/techStack/color/zod/zod.svg",
      label: "Zod",
    },
  ];

  return (
    <>
      {/* <Section id={"techStack2"}>
        <h1 className="text-center text-2xl">Teknologi</h1>
        <h2>Proficient: CSS, Vercel, Axios, RESTful API</h2>
        <h2>Familiar: FastAPI, Poetry, pytest</h2>
        <h2>Others: GIMP</h2>
      </Section> */}
      <Section id={"techStack"}>
        <h2 className="text-center text-2xl my-2">Teknologi</h2>
        <h3 className="text-center text-xl my-2 pt-3">Mahir</h3>
        <div className="flex w-full">
          <div className="flex flex-col w-1/2">
            <h4 className="text-center text-lg my-2">Utama</h4>
            <ul className="flex flex-wrap">
              {category1.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col w-1/4 justify-center items-center gap-2 my-2"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={60}
                    height={60}
                    className=""
                  />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <Separator
            orientation="vertical"
            className="w-[2px] h-[416px] mt-12 mx-2"
          />
          <div className="flex flex-col w-1/2">
            <h4 className="text-center text-lg my-2">Lainnya</h4>
            <ul className="flex flex-wrap">
              {category2.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col w-1/4 justify-center items-center gap-2 my-2"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={60}
                    height={60}
                    className=""
                  />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="text-center text-xl my-2 pt-3">Familiar</h3>
        <div className="flex w-full">
          <div className="w-1/6"></div>
          <div className="flex flex-col w-2/3">
            <ul className="flex flex-wrap">
              {category3.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col w-1/6 justify-center items-center gap-2 my-2"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={60}
                    height={60}
                    className=""
                  />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/6"></div>
        </div>
      </Section>
    </>
  );
};

export default TechStack;
