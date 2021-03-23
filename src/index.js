import registerServiceWorker from "./registerServiceWorker";
import { Application } from 'pixi.js';
import System from "./2D/System";
import * as THREE from 'three';
export const app = new Application({
  width: window.innerWidth - 15,
  height: window.innerHeight - 25,
  backgroundColor: 0x000000,
});

export const system = new System();
document.body.appendChild(app.view);


// export const system = new System();

// export const scene = new THREE.Scene();
// export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// export const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth - 15, window.innerHeight - 25);
// document.body.appendChild(renderer.domElement);

// // const geometry = new THREE.BoxGeometry();
// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);

// camera.position.z = 5;
// const animate = () => {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   cube.rotation.z += 0.01;
//   renderer.render(scene, camera);
// }
// animate();







registerServiceWorker();
