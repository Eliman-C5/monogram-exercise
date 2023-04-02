import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeSphere = ({size, style}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Función para cargar la imagen en la textura
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

    // Ajustamos la posición de la luz para mejorar la reflexión metálica
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    // Configuración de la esfera
    const geometry = new THREE.SphereGeometry(1, 64, 64, 0, Math.PI, 0, Math.PI);
    const material = new THREE.MeshStandardMaterial({
      map: loadTexture('https://res.cloudinary.com/datsipxkz/image/upload/v1680293977/monogram-exercise/i3mv2d2g1i0lo9nfg4y5.png'),
      roughness: 0.2, // Ajustamos la rugosidad para mejorar la reflexión metálica
      metalness: 0, // Ajustamos la metalicidad para mejorar la apariencia metálica
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Configuración de la cámara y el renderizador
    camera.position.z = size;
    renderer.setSize(window.innerWidth, window.innerHeight);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div className={`${style}`}>
    <canvas ref={canvasRef} className='max-w-[100%] max-h-[100%] mx-auto relative z-10 top-[7%] sm:top-0 lg:top-[50px] 2xl:top-[80px]'>
    </canvas>
  </div>
};