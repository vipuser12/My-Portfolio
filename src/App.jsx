import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
