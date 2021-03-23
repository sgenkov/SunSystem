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
        this.init();
    };
    
    init = () => {
        this.globesParser = new GlobesParser(base_scene, this.globes);
        this.globesParser.extractObjects();
        // app.ticker.add(this.systemTicker);
        this.systemTicker();
        console.log(this.globes);
    };

    systemTicker = () => {

        // this.updateCycle();
        this.globes.forEach(globe => {
            globe?.updatePosition();
        });
        requestAnimationFrame(this.systemTicker);
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // cube.rotation.z += 0.01;
        renderer.render(scene, camera);
    };

    updateCycle = () => {
        if (this.systemCycle < 360) {
            this.systemCycle ++;
        } else {
            this.systemCycle = 0;
        };
    };
};