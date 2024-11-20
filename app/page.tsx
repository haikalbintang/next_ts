import Education from "@/components/3_modules/Education";
import Hero from "@/components/3_modules/Hero";
import Project from "@/components/3_modules/Project";
import TechStack from "@/components/3_modules/TechStack";
import Main from "@/components/4_templates/Main";

export default function Home() {
  return (
    <>
      <Main>
        <Hero />
        <Education />
        <TechStack />
        <Project />
      </Main>
    </>
  );
}
