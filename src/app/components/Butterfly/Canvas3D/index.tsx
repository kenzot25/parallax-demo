/* eslint-disable @next/next/no-img-element */
'use client';
import {Canvas} from '@react-three/fiber';
import Model from '../Model';
import {useEffect, useRef} from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const arrPositionModel = [
  {
    id: 'banner',
    position: {x: 0, y: -1, z: 0},
    rotation: {x: 0, y: 1.25, z: 0},
  },
  {
    id: 'intro',
    position: {x: 7, y: 1, z: -4},
    rotation: {x: -0.5, y: -1, z: 0},
  },
  {
    id: 'description',
    position: {x: -5, y: 2, z: -2},
    rotation: {x: 0, y: 1.5, z: 0},
  },
  {
    id: 'contact',
    position: {x: 0, y: 0.5, z: 0},
    rotation: {x: -0.5, y: 0, z: 0},
  },
];

export const Canvas3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Reference to the canvas element
  const modelRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(null);

  const modelMove = () => {
    console.log(modelRef.current);

    const sections = document.querySelectorAll('.section');
    let currentSection: string;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    const position_active = arrPositionModel.findIndex(
      (val) => val.id === currentSection,
    );

    if (position_active >= 0 && modelRef.current) {
      const new_coordinates = arrPositionModel[position_active];
      gsap.to(modelRef.current.position, {
        x: new_coordinates.position.x,
        y: new_coordinates.position.y,
        z: new_coordinates.position.z,
        duration: 3,
        ease: 'power1.out',
      });
      gsap.to(modelRef.current.rotation, {
        x: new_coordinates.rotation.x,
        y: new_coordinates.rotation.y,
        z: new_coordinates.rotation.z,
        duration: 3,
        ease: 'power1.out',
      });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Adjust the canvas size based on the window size
        canvasRef.current.style.width = `${window.innerWidth}px`;
        canvasRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    const handleScroll = () => {
      modelMove();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize(); // Initial call to set size

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [canvasRef]);

  if (window == undefined) return;

  return (
    <Canvas id='container3D' ref={canvasRef}>
      <perspectiveCamera
        fov={10} // Field of view
        aspect={window.innerWidth / window.innerHeight} // Aspect ratio
        near={0.1} // Near clipping plane
        far={1000} // Far clipping plane
        position={[0, 0, 13]} // Camera position
      />
      <ambientLight intensity={1.3} color='0xffffff' />
      <pointLight position={[10, 10, 10]} />
      <directionalLight
        color='0xffffff'
        intensity={1}
        position={[500, 500, 500]}
      />
      <Model ref={modelRef} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};
