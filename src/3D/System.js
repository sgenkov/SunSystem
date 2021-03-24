import GlobesParser from "./GlobesParser";
import base_scene from '../base_scene.json';
import { renderer, camera, scene } from "..";
export default class System {
    constructor() {
        this.globesParser = null;
        this.position = {
            x:0,
            y:0
        };
        this.globes = [];
        this.systemCycle = 0;
        this.keysPressed = {};
        this.init();
    };
    
    init = () => {
        this.globesParser = new GlobesParser(base_scene, this.globes);
        this.globesParser.extractObjects();
        this.systemTicker();
        document.addEventListener("keydown", (e) => this.keysDown(e));
        document.addEventListener("keyup", (e) => this.keysUp(e));
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
            globe?.updatePosition();
        });
        requestAnimationFrame(this.systemTicker);
        renderer.render(scene, camera);
    };

    updateCycle = () => {
        if (this.systemCycle < 360) {
            this.systemCycle ++;
        } else {
            this.systemCycle = 0;
        };
    };

    keyHandler = () => {
        if (this.keysPressed["87"] === true) { // W - UP
            camera.position.x+=0.1;
        };
        if (this.keysPressed["81"] === true) { // W - UP
            camera.position.x-=0.1;
        };
        if (this.keysPressed["65"] === true) { // W - UP
            camera.position.y+=0.1;
        };
        if (this.keysPressed["83"] === true) { // W - UP
            camera.position.y-=0.1;
        };
        if (this.keysPressed["90"] === true) { // W - UP
            camera.position.z+=0.1;
        };
        if (this.keysPressed["88"] === true) { // W - UP
            camera.position.z-=0.1;
            // camera.rotation.x+= 0.1;
        };

        // console.log(camera.position);
    };
};