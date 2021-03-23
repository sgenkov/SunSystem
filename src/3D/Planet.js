import { scene, system } from '../index';
import * as THREE from 'three';
export default class Planet {
    constructor(name, position, radius, speed, color, orbitalRadius, parentName) {
        this.name = name;
        this.position = position;
        this.radius = radius;
        this.speed = speed;
        this.orbitalRadius = orbitalRadius;
        this.parentName = parentName;
        this.cycle = 0;
        // this.graphic = new Graphics();
        // this.graphic.beginFill(color);
        // this.graphic.lineStyle(0);
        // this.graphic.drawCircle(position.x, position.y, radius);
        // this.graphic.endFill();
        // app.stage.addChild(this.graphic);
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.cube);
    };
    updatePosition = () => {
        // this.updateInnerCycle();
        // if (this.parent) {
        //     this.graphic.x = this.parent.position.x + this.orbitalRadius * Math.cos(this.cycle);
        //     this.graphic.y = this.parent.position.y + this.orbitalRadius * Math.sin(this.cycle);
        // } else {
        //     this.assignParent();
        //     this.graphic.x = this.orbitalRadius * Math.cos(this.cycle);
        //     this.graphic.y = this.orbitalRadius * Math.sin(this.cycle);
        // };
        // this.position.x = this.graphic.x;
        // this.position.y = this.graphic.y;
        this.cube.rotation.z += 0.01;
        this.cube.rotation.y += 0.01;
        this.cube.rotation.x += 0.01;
    };

    updateInnerCycle = () => {
        if (this.cycle < 360) {
            this.cycle += this.speed;
        } else {
            this.cycle = 0;
        };
    };

    assignParent = () => {
        this.parent = system.globes.find(globe => globe.name === this.parentName);
    };

};


