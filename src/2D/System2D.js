import GlobesParser from "./GlobesParser";
import base_scene from '../base_scene.json';
import { Application } from "pixi.js";
export default class System {
    constructor() {
        // this.app = app;
        // this.sun = null;
        // this.globesParser = null;
        this.position = {
            x:0,
            y:0
        };
        this.globes = [];
        this.systemCycle = 0;
        // this.del = 0;
        this.init();
    };
    
    init = () => {
        // this.app = new Application({
        //     width: window.innerWidth - 15,
        //     height: window.innerHeight - 25,
        //     backgroundColor: 0x000000,
        //   });
        // this.globesParser = new GlobesParser(base_scene, this.globes);
        // this.globesParser.extractObjects();
        // this.app.ticker.add(this.systemTicker);//todo 1
    };

    systemTicker = () => {
        // if (this.del < 7) {
        //     this.del ++;
        //     return;
        // } else {
        //     this.del = 0;
        // };

        this.updateCycle();
        if(this.globes && this.globes.length > 0) {
            this.globes.forEach(globe => {
                globe?.updatePosition();
            });
        };
    };

    updateCycle = () => {
        if (this.systemCycle < 360) {
            this.systemCycle ++;
        } else {
            this.systemCycle = 0;
        };
    };
};