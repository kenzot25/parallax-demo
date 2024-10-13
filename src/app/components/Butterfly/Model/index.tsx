'use client';
import {useGLTF} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

const Model = React.forwardRef((props, ref) => {
  const {scene, animations} = useGLTF('/animated_butterfly.glb'); // Adjust path as necessary
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const scale = 1.1;
  scene.position.setY(-1);
  scene.rotateY(0.5);
  // Create and play animations if available
  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      mixerRef.current.clipAction(animations[0]).play();
    }

    return () => {
      // Cleanup: Stop animations when component unmounts
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [animations, scene]);

  // Update the mixer on every frame
  useFrame((_state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  // Assign the model reference
  if (ref) {
    (
      ref as React.MutableRefObject<THREE.Group<THREE.Object3DEventMap> | null>
    ).current = scene;
  }

  return <primitive object={scene} scale={[scale, scale, scale]} />;
});
Model.displayName = 'Model';

export default Model;
