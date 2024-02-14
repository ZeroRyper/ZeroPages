import Descrip from "./components/Descrip";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projectos";
import "./App.css";
function App() {
  return (
    <div>
              <Navbar />

      <div className="z-40 flex-col mx-auto 2xl:my-8 relative 2xl:rounded-3xl bg-backColor max-w-[1440px]">
        <Descrip />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
