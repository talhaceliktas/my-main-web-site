
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import AboutIntro from './pages/About'
import CustomCursor from './components/CustomCursor'
export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Home />
      <AboutIntro />
      <Projects />
      <Contact />
    </>
  )
}