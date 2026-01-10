import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

interface ModelProps {}

const Model: React.FC<ModelProps> = () => {
  const { scene } = useGLTF('models/Fivem DevlizRP.glb');
  return <motion.primitive object={scene} />;
};

const App: React.FC = () => {
  useEffect(() => {
    // Parallax effect with GSAP
    gsap.utils.toArray('.parallax-bg').forEach((bg: any, index: number) => {
      let rate = 0.4;
      if (bg.classList.contains('layer1')) rate = 0.3;
      else if (bg.classList.contains('layer2')) rate = 0.6;
      const direction = Math.floor(index / 2) % 2 === 0 ? 1 : -1;

      ScrollTrigger.create({
        trigger: bg.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          gsap.set(bg, { x: self.progress * rate * direction * 100 });
        }
      });
    });
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="App min-h-screen bg-gray-900 text-white">
      <div className="static-bg fixed inset-0 -z-10"></div>
      <main className="relative">
        <section className="parallax-section h-screen flex items-center justify-center">
          <div className="parallax-bg bg1 layer1 absolute inset-0"></div>
          <div className="parallax-bg bg1 layer2 absolute inset-0"></div>
          <div className="content front z-10 text-center">
            <motion.div
              className="text-layer-2 text-6xl font-bold"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              {'Whozh8'.split('').map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
        <div className="section-divider h-1 bg-black"></div>

        <section className="parallax-section h-screen flex items-center justify-center">
          <div className="parallax-bg bg2 layer1 absolute inset-0"></div>
          <div className="parallax-bg bg2 layer2 absolute inset-0"></div>
          <div className="content back z-10 text-center">
            <h2 className="text-4xl font-semibold mb-4">About</h2>
            <p className="text-lg">Passionate about creating stunning visuals.</p>
          </div>
        </section>
        <div className="section-divider h-1 bg-black"></div>

        <section className="parallax-section h-screen flex items-center justify-center">
          <div className="parallax-bg bg3 layer1 absolute inset-0"></div>
          <div className="parallax-bg bg3 layer2 absolute inset-0"></div>
          <div className="content front z-10 text-center">
            <h2 className="text-4xl font-semibold mb-4">Projects</h2>
            <p className="text-lg">Innovative work in multimedia.</p>
          </div>
        </section>
        <div className="section-divider h-1 bg-black"></div>

        <section className="blender-section h-screen flex items-center justify-center">
          <div className="content front z-10 text-center">
            <h2 className="text-4xl font-semibold mb-4">1</h2>
            <p className="text-lg mb-4">Custom Blender scene loaded via Three.js</p>
            <Canvas className="h-96 w-full">
              <Model />
            </Canvas>
          </div>
        </section>
        <div className="section-divider h-1 bg-black"></div>

        <section className="blender-section h-screen flex items-center justify-center">
          <div className="content front z-10 text-center">
            <h2 className="text-4xl font-semibold mb-4">2</h2>
            <p className="text-lg">Placeholder for another scene</p>
          </div>
        </section>
        <div className="section-divider h-1 bg-black"></div>

        <section className="blender-section h-screen flex items-center justify-center">
          <div className="content front z-10 text-center">
            <h2 className="text-4xl font-semibold mb-4">3</h2>
            <p className="text-lg">Placeholder for another scene</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;