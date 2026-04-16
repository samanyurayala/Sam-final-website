import Navbar from '@components/Navbar.jsx';
import Dock from '@components/Dock.jsx';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Welcome } from '@windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />

      <Welcome />
    </main>
  )
}

export default App