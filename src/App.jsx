
import Descrip from './components/Descrip'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Projects from './components/Projectos'
import "./App.css"
function App() {

  return (
      <div className='z-40 flex-col mx-auto 2xl:my-8 relative 2xl:rounded-3xl bg-backColor max-w-[1440px]'>
      <Navbar />
      <Descrip/>
      <Skills/>
      <Projects/>
      </div>

  )
}

export default App
