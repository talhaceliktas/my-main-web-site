
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import AboutIntro from './pages/About'
import CustomCursor from './components/CustomCursor'
import FloatingStars from './components/FloatingStars'

export default function App() {
  return (
    <>
      <FloatingStars>
          <CustomCursor />
          <Navbar />
          <Home />
      </FloatingStars>
        <AboutIntro />
        <Projects />
        <Contact />
            



    </>
  )
}