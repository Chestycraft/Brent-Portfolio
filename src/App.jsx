import { Home } from "./section/home"
import { Projects } from "./section/projects"
import { ToolKit } from "./section/toolkit"
import { Contact } from './section/contact';
import { Footer } from "./section/footer";

function App() {
  return (
    <>
      <div className="flex flex-col w-full ">
          <Home/>
          <ToolKit/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
    </>
  )
}

export default App