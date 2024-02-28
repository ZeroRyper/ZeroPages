import Descrip from "./components/Descrip";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projectos";
import "./App.css";
function App() {
  return (
    <div>
              <Navbar />

      <div className="grid grid-cols-1 gap-20 ">
        <Descrip />
        <Experiences />
        <Projects />
      </div>
    </div>
  );
}

export default App;
