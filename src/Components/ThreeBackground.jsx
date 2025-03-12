import { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";
import { CustomShader } from "./CustomShader";

function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const rendered = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendered.setSize(window.innerWidth, window.innerHeight);
    rendered.setClearColor(0x000000, 0); // Transparent Background
    mountRef.current.appendChild(rendered.domElement);

    // Add the CustomShader Background
    const geomerty = new THREE.PlaneGeometry(50, 50);
    const material = new CustomShader();
    const background = new THREE.Mesh(geomerty, material);
    scene.add(background);

    // Load Petal Texture
    const textureLoader = new THREE.TextureLoader();
    const petalTexture = textureLoader.load("/peta12.png");

    const petalCount = 100;
    const petals = [];

    const petalGeometry = new THREE.PlaneGeometry(0.4, 0.4);
    const petalMaterial = new THREE.MeshBasicMaterial({
      map: petalTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < petalCount; i++) {
      const petal = new THREE.Mesh(petalGeometry, petalMaterial);
      petal.position.set(
        (Math.random() - 0.5) * 20, // random x position
        Math.random() * 10, // random y position
        (Math.random() - 0.5) * 10 //random z position
      );
      petal.rotation.z = Math.random() * Math.PI * 2;

      petal.fallSpeed = 0.02 + Math.random() * 0.05;
      petal.swaySpeed = 0.005 + Math.random() * 0.01;
      petal.rotationSpeed = 0.005 + Math.random() * 0.02;
      petal.offset = Math.random() * Math.PI * 2;

      scene.add(petal);
      petals.push(petal);
    }

    // Animate Loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      petals.forEach((petal) => {
        petal.position.y -= petal.fallSpeed;
        petal.position.x +=
          Math.sin(time * petal.swaySpeed + petal.offset) * 0.02;
        petal.position.z += petal.rotationSpeed;

        if (petal.position.y < -10) {
          petal.position.y = 10;
          petal.position.x = (Math.random() - 0.5) * 20;
          petal.position.z = (Math.random() - 0.5) * 10;
        }
      });

      material.time = time;
      rendered.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendered.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(rendered.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    ></div>
  );
}

export default ThreeBackground;
