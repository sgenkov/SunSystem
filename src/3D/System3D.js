import GlobesParser from "./GlobesParser";
import base_scene from '../base_scene.json';
import * as THREE from 'three';
// import { renderer, camera, scene } from "..";
export default class System3D {
    constructor() {
        this.globesParser = null;
        // this.position = {
        //     x: 0,
        //     y: 0
        // };
        this.globes = [];
        this.systemCycle = 0;
        this.keysPressed = {};
        this.init();
    };

    //Create a DirectionalLight and turn on shadows for the light


    //Create a sphere that cast shadows (but does not receive them)
    // const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
    // const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
    // const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    // sphere.castShadow = false; //default is false
    // sphere.receiveShadow = true; //default
    // scene.add( sphere );

    //Create a helper for the shadow camera (optional)
    // const helper = new THREE.CameraHelper( light.shadow.camera );
    // scene.add( helper );

    init = () => {
        this.globesParser = new GlobesParser(base_scene, this.globes);
        this.globesParser.extractObjects();
        this.globesParser.assignParents();

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 10;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth - 15, window.innerHeight - 25);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
        this.lightInit();

        //Create a plane that receives shadows (but does not cast them)
        const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        this.scene.add(plane);


        document.body.appendChild(this.renderer.domElement);
        this.globes.forEach(globe => this.scene.add(globe.body));

        this.systemTicker();
        document.addEventListener("keydown", (e) => this.keysDown(e));
        document.addEventListener("keyup", (e) => this.keysUp(e));
    };

    lightInit = () => {
        // this.light = new THREE.DirectionalLight(0xffffff, 1, 100);
        this.light = new THREE.PointLight(0xffffff, 1, 100);
        this.light.position.set(0, 0, 0); //default; light shining from top // set( 0, 1, 0 )
        this.light.castShadow = true; // default false

        //Set up shadow properties for the light
        this.light.shadow.mapSize.width = 512; // default
        this.light.shadow.mapSize.height = 512; // default
        this.light.shadow.camera.near = 0.5; // default
        this.light.shadow.camera.far = 500; // default
        this.scene.add(this.light);

        this.light2 = new THREE.DirectionalLight(0xffffff, 1, 100);
        this.light2.position.set(0.5, 0.5, 0); //default; light2 shining from top // set( 0, 1, 0 )
        this.light2.castShadow = true; // default false
        this.light2.shadow.mapSize.width = 512; // default
        this.light2.shadow.mapSize.height = 512; // default
        this.light2.shadow.camera.near = 0.5; // default
        this.light2.shadow.camera.far = 500; // default
        this.scene.add(this.light2);
    };

    keysDown(e) {
        //  console.log(e.keyCode);
        this.keysPressed[`${e.keyCode}`] = true;
    };

    keysUp(e) {
        this.keysPressed[`${e.keyCode}`] = false;
    };

    systemTicker = () => {
        this.keyHandler();

        this.globes.forEach(globe => {
            globe.updatePosition();
        });
        requestAnimationFrame(this.systemTicker);
        this.renderer.render(this.scene, this.camera);
    };

    updateCycle = () => {
        if (this.systemCycle < 360) {
            this.systemCycle++;
        } else {
            this.systemCycle = 0;
        };
    };

    keyHandler = () => {
        if (this.keysPressed["87"] === true) { // W - UP
            this.camera.position.x += 0.1;
        };
        if (this.keysPressed["81"] === true) { // W - UP
            this.camera.position.x -= 0.1;
        };
        if (this.keysPressed["65"] === true) { // W - UP
            this.camera.position.y += 0.1;
        };
        if (this.keysPressed["83"] === true) { // W - UP
            this.camera.position.y -= 0.1;
        };
        if (this.keysPressed["90"] === true) { // W - UP
            this.camera.position.z += 0.1;
        };
        if (this.keysPressed["88"] === true) { // W - UP
            this.camera.position.z -= 0.1;
            // camera.rotation.x+= 0.1;
        };
        //* ROTATION 

        if (this.keysPressed["69"] === true) { // W - UP
            this.camera.rotation.x += 0.1;
        };
        if (this.keysPressed["82"] === true) { // W - UP
            this.camera.rotation.x -= 0.1;
        };
        if (this.keysPressed["68"] === true) { // W - UP
            this.camera.rotation.y += 0.1;
        };
        if (this.keysPressed["70"] === true) { // W - UP
            this.camera.rotation.y -= 0.1;
        };
        if (this.keysPressed["67"] === true) { // W - UP
            this.camera.rotation.z += 0.1;
        };
        if (this.keysPressed["86"] === true) { // W - UP
            this.camera.rotation.z -= 0.1;
            // camera.rotation.x+= 0.1;
        };

        // console.log(camera.position);
    };
};