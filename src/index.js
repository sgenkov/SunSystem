import registerServiceWorker from "./registerServiceWorker";
// import { Application } from 'pixi.js';
import System from "./3D/System";
import * as THREE from 'three';
// export const app = new Application({
//   width: window.innerWidth - 15,
//   height: window.innerHeight - 25,
//   backgroundColor: 0x000000,
// });

// export const system = new System();
// document.body.appendChild(app.view);


export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

export const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth - 15, window.innerHeight - 25);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a DirectionalLight and turn on shadows for the light
const light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 0, 1, 0 ); //default; light shining from top
light.castShadow = true; // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default

//Create a sphere that cast shadows (but does not receive them)
// const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
// const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
// const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
// sphere.castShadow = false; //default is false
// sphere.receiveShadow = true; //default
// scene.add( sphere );


//Create a plane that receives shadows (but does not cast them)
const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
const planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

//Create a helper for the shadow camera (optional)
// const helper = new THREE.CameraHelper( light.shadow.camera );
// scene.add( helper );
export const system = new System();
document.body.appendChild(renderer.domElement);

camera.position.z = 10;

// const animate = () => {
//   requestAnimationFrame(animate);
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//   // cube.rotation.z += 0.01;
//   renderer.render(scene, camera);
// }
// animate();







registerServiceWorker();
