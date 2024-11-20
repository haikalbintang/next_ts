import React from "react";
import Section from "../4_templates/Section";
import Image from "next/image";

const TechStack = () => {
  const category1 = [
    {
      id: 1,
      src: "/techStack/reactjs.svg",
      label: "React",
    },
    {
      id: 2,
      src: "/techStack/nextjs2.svg",
      label: "NEXT.js",
    },
    {
      id: 3,
      src: "/techStack/js.svg",
      label: "JavaScript",
    },
    {
      id: 4,
      src: "/techStack/typescript.svg",
      label: "TypeScript",
    },
    {
      id: 1,
      src: "/techStack/html5.svg",
      label: "HTML",
    },
    {
      id: 1,
      src: "/techStack/nodejs.svg",
      label: "Node.js",
    },
    {
      id: 1,
      src: "/techStack/npm2.svg",
      label: "NPM",
    },
    {
      id: 1,
      src: "/techStack/postman.svg",
      label: "Postman",
    },
    {
      id: 1,
      src: "/techStack/python.svg",
      label: "Python",
    },
    {
      id: 1,
      src: "/techStack/reactrouter.svg",
      label: "React Router",
    },
    {
      id: 1,
      src: "/techStack/redux.svg",
      label: "Redux",
    },
    {
      id: 1,
      src: "/techStack/shadcnui.svg",
      label: "shadcn",
    },
    {
      id: 1,
      src: "/techStack/supabase.svg",
      label: "Supabase",
    },
    {
      id: 1,
      src: "/techStack/swagger.svg",
      label: "Swagger",
    },
    {
      id: 1,
      src: "/techStack/tailwindcss.svg",
      label: "Tailwind CSS",
    },
    {
      id: 1,
      src: "/techStack/vitejs.svg",
      label: "Vite",
    },
  ];

  const category2 = [
    {
      id: 1,
      src: "/techstack/chrome.svg",
      label: "Chrome",
    },
    {
      id: 1,
      src: "/techStack/canva.svg",
      label: "Canva",
    },
    {
      id: 1,
      src: "/techStack/edge.svg",
      label: "Edge",
    },
    {
      id: 1,
      src: "/techStack/figma.svg",
      label: "Figma",
    },
    {
      id: 1,
      src: "/techStack/git.svg",
      label: "Git",
    },
    {
      id: 1,
      src: "/techStack/github.svg",
      label: "GitHub",
    },
    {
      id: 1,
      src: "/techStack/insomnia.svg",
      label: "Insomnia",
    },
    {
      id: 1,
      src: "/techStack/jira.svg",
      label: "Jira",
    },
    {
      id: 1,
      src: "/techStack/markdown.svg",
      label: "Markdown",
    },
    {
      id: 1,
      src: "/techStack/miro.svg",
      label: "Miro",
    },
    {
      id: 1,
      src: "/techStack/openai.svg",
      label: "OpenAI",
    },
    {
      id: 1,
      src: "/techStack/netlify2.svg",
      label: "Netlify",
    },
    {
      id: 1,
      src: "/techStack/prettier.svg",
      label: "Prettier",
    },
    {
      id: 1,
      src: "/techStack/slack.svg",
      label: "Slack",
    },
    {
      id: 1,
      src: "/techStack/vscode.svg",
      label: "VS Code",
    },
  ];

  const category3 = [
    {
      id: 1,
      src: "/techStack/docker.svg",
      label: "Docker",
    },
    {
      id: 1,
      src: "/techStack/electron.svg",
      label: "Electron.js",
    },
    {
      id: 1,
      src: "/techStack/flask.svg",
      label: "Flask",
    },
    {
      id: 1,
      src: "/techStack/jest.svg",
      label: "Jest",
    },
    {
      id: 1,
      src: "/techStack/mongodb.svg",
      label: "MongoDB",
    },
    {
      id: 1,
      src: "/techStack/mysql.svg",
      label: "MySQL",
    },
    {
      id: 1,
      src: "/techStack/php.svg",
      label: "PHP",
    },
    {
      id: 1,
      src: "/techStack/postgresql.svg",
      label: "PostgreSQL",
    },
    {
      id: 1,
      src: "/techStack/reactquery.svg",
      label: "React Query",
    },
    {
      id: 1,
      src: "/techStack/sass.svg",
      label: "SASS",
    },
    {
      id: 1,
      src: "/techStack/threejs.svg",
      label: "Three.js",
    },
    {
      id: 1,
      src: "/techStack/zod.svg",
      label: "Zod",
    },
  ];

  return (
    <>
      <Section id={"techStack2"}>
        <h1 className="text-center text-2xl">Teknologi</h1>
        <h2>Proficient: CSS, Vercel, Axios, RESTful API</h2>
        <h2>Familiar: FastAPI, Poetry, pytest</h2>
        <h2>Others: GIMP</h2>
      </Section>
      <Section id={"techStack"}>
        <h2 className="text-center text-2xl my-2">Teknologi</h2>
        <h3 className="text-center text-xl my-2">Mahir</h3>
        <div className="flex w-full">
          <div className="flex flex-col w-2/3">
            <h4 className="text-center text-lg my-2">Utama</h4>
            <ul className="flex flex-wrap">
              {category1.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col w-1/6 justify-center items-center gap-2 my-2"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={60}
                    height={60}
                  />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-1/3">
            <h4 className="text-center text-lg my-2">Lainnya</h4>
            <ul className="flex flex-wrap">
              {category2.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col w-1/3 justify-center items-center gap-2 my-2"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={60}
                    height={60}
                  />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="text-center text-xl my-2">Familiar</h3>
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
