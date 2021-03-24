import { scene, system } from '../index';
import * as THREE from 'three';
export default class Planet {
    constructor(name, position, radius, speed, color, orbitalRadius, parentName) {
        // const {x, y, z} = position;
        this.name = name;
        this.position = position;
        this.radius = radius;
        this.speed = speed;
        this.color = +color;
        this.orbitalRadius = orbitalRadius;
        this.parentName = parentName;
        this.cycle = 0;
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial({ color: this.color });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.cube);
    };
    updatePosition = () => {
        this.updateInnerCycle();
        // if (this.parent) {
        //     this.graphic.x = this.parent.position.x + this.orbitalRadius * Math.cos(this.cycle);
        //     this.graphic.y = this.parent.position.y + this.orbitalRadius * Math.sin(this.cycle);
        // } else {
        //     this.assignParent();
        // this.graphic.x = this.orbitalRadius * Math.cos(this.cycle);
        // this.graphic.y = this.orbitalRadius * Math.sin(this.cycle);
        // };
        const scale = 52;
        this.cube.position.x = this.orbitalRadius * Math.cos(this.cycle);
        this.cube.position.y = this.orbitalRadius * Math.sin(this.cycle);
        this.cube.position.x /= scale;
        this.cube.position.y /= scale;

        this.position.x = this.cube.position.x;
        this.position.y = this.cube.position.y;
        this.position.z = this.cube.position.z;

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


