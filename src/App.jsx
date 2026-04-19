import Navbar from '@components/Navbar.jsx';
import Dock from '@components/Dock.jsx';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Welcome, Projects, About, Settings, Portfolio, Quicktime } from '@windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />

      <Welcome />
      <Projects />
      <About />
      <Settings />
      <Portfolio />
      <Quicktime />
    </main>
  )
}

export default App