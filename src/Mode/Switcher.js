import { Application } from "pixi.js";
import GlobesParser from "../2D/GlobesParser";
import System2D from "../2D/System2D";
import System3D from "../3D/System3D";
import base_scene from "../base_scene.json";

export default class Switcher {
    constructor(baseMode) {
        this.currentMode = null;
        this.system = null;
        this.app = null;
        this.switch(baseMode);
    };
    switch = (mode) => { //TODO Make state machine here
        this.currentMode = mode;
        if (mode === '2D') {
            this.app = new Application({
                width: window.innerWidth - 15,
                height: window.innerHeight - 25,
                backgroundColor: 0x000000,
            });
            this.system = new System2D();
            this.globesParser2D = new GlobesParser(base_scene, this.system.globes);
            this.globesParser2D.extractObjects();
            this.globesParser2D.assignParents();
            this.system.globes.forEach(globe => this.app.stage.addChild(globe.graphic));
            document.body.appendChild(this.app.view);

            this.app.ticker.add(this.system.systemTicker);
        } else if (mode === '3D') {
            this.system = new System3D();
        } else {
            throw new Error("No such mode");
        };
    };
};