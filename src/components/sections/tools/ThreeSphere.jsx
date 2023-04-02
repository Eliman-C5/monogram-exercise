import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeSphere = ({size, style}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    //Function to load the image into the texture
    const loadTexture = (url) => {
      const textureLoader = new THREE.TextureLoader();
      return textureLoader.load(url);
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    //Adjust the position of the light to improve metallic reflection
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    //Sphere configuration
    const geometry = new THREE.SphereGeometry(1, 32, 32, 0, Math.PI, 0, Math.PI);
    const material = new THREE.MeshStandardMaterial({
      map: loadTexture('https://res.cloudinary.com/datsipxkz/image/upload/v1680293977/monogram-exercise/i3mv2d2g1i0lo9nfg4y5.png'),
      roughness: 0.2, //Now we adjust the roughness to improve the metallic reflection
      metalness: 0, //This adjusts the metallicness to improve the metallic appearance
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    //Camera and renderer settings
    camera.position.z = size;
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    let myReqId
    const animate = () => {
      myReqId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
    
    return () => {
      window.cancelAnimationFrame(myReqId)
    }
  }, []);

  return <div className={`${style}`}>
    <canvas ref={canvasRef} className='max-w-[100%] mx-auto relative z-10 top-[-32%] sm:top-[-25%] md:top-[-10%] lg:top-[50px] 2xl:top-[80px]'>
    </canvas>
  </div>
};