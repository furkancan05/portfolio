import About from "~/components/About";
import AppHeader from "~/components/AppHeader";
import Landing from "~/components/Landing";
import LetsTalk from "~/components/LetsTalk";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";

export default function Home() {
  return (
    <main>
      <AppHeader />

      <div className="flex flex-col gap-20">
        <Landing />
        <Skills />
        <About />
        <Projects />
        <LetsTalk />
        {/* <Follow /> */}
      </div>
    </main>
  );
}
