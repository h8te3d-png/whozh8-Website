import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const { scene } = useGLTF('models/Fivem DevlizRP.glb');
  return <primitive object={scene} />;
}

function App() {
  useEffect(() => {
    // GSAP animations
    gsap.from('.text-layer-2 span', {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out'
    });

    // Parallax effect with GSAP
    gsap.utils.toArray('.parallax-bg').forEach((bg, index) => {
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

  return (
    <div className="App">
      <div className="static-bg"></div>
      <main>
        <section className="parallax-section">
          <div className="parallax-bg bg1 layer1"></div>
          <div className="parallax-bg bg1 layer2"></div>
          <div className="content front">
            <div className="text-layer-2">
              <span>W</span><span>h</span><span>o</span><span>z</span><span>h</span><span>8</span>
            </div>
          </div>
        </section>
        <div className="section-divider"></div>

        <section className="parallax-section">
          <div className="parallax-bg bg2 layer1"></div>
          <div className="parallax-bg bg2 layer2"></div>
          <div className="content back">
            <h2>About</h2>
            <p>Passionate about creating stunning visuals.</p>
          </div>
        </section>
        <div className="section-divider"></div>

        <section className="parallax-section">
          <div className="parallax-bg bg3 layer1"></div>
          <div className="parallax-bg bg3 layer2"></div>
          <div className="content front">
            <h2>Projects</h2>
            <p>Innovative work in multimedia.</p>
          </div>
        </section>
        <div className="section-divider"></div>

        <section className="blender-section">
          <div className="content front">
            <h2>1</h2>
            <p>Custom Blender scene loaded via Three.js</p>
            <Canvas style={{ height: '50vh' }}>
              <Model />
            </Canvas>
          </div>
        </section>
        <div className="section-divider"></div>

        <section className="blender-section">
          <div className="content front">
            <h2>2</h2>
            <p>Placeholder for another scene</p>
          </div>
        </section>
        <div className="section-divider"></div>

        <section className="blender-section">
          <div className="content front">
            <h2>3</h2>
            <p>Placeholder for another scene</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;