import { Suspense } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './styles/global.scss';

function App() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </Suspense>
    </div>
  );
}

export default App;