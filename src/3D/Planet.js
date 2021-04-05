// import { scene, system } from '../index';
import { system } from '../index';
import * as THREE from 'three';
export default class Planet {
    constructor(name, position, radius, speed, color, orbitalRadius, parentName) {
        // const {x, y, z} = position;
        this.name = name;
        this.position = position;
        this.radius = radius;
        // console.log(radius);
        this.speed = speed;
        this.color = +color;
        this.orbitalRadius = orbitalRadius;
        this.parentName = parentName;
        this.cycle = 0;
        // this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        // this.material = new THREE.MeshStandardMaterial({ color: this.color });
        // this.cube = new THREE.Mesh(this.geometry, this.material);

        const sphereGeometry = new THREE.SphereGeometry(this.radius / 70, 32, 32);
        const sphereMaterial = new THREE.MeshStandardMaterial({ color: this.color });
        this.cube = new THREE.Mesh(sphereGeometry, sphereMaterial);

        this.cube.castShadow = true; //default is false
        this.cube.receiveShadow = true; //default
        // console.log(this.cube);
        // system.scene.add(this.cube);
    };
    updatePosition = () => {
        this.updateInnerCycle();
        const scale = 52;
        if (this.PARENT) {
            this.cube.position.x = this.orbitalRadius * Math.cos(this.cycle) + this.PARENT.orbitalRadius * Math.cos(this.PARENT.cycle);
            this.cube.position.y = this.orbitalRadius * Math.sin(this.cycle) + this.PARENT.orbitalRadius * Math.sin(this.PARENT.cycle);
        } else {
            this.cube.position.x = this.orbitalRadius * Math.cos(this.cycle);
            this.cube.position.y = this.orbitalRadius * Math.sin(this.cycle);
        };

        this.cube.position.x /= scale;
        this.cube.position.y /= scale;

        this.position = this.cube.position;

    };

    updateInnerCycle = () => {
        if (this.cycle < 360) {
            this.cycle += this.speed;
        } else {
            this.cycle = 0;
        };
    };

    assignParent = () => {
        // this.parent = system.globes.find(globe => globe.name === this.parentName);
        console.log('REMOVE THIS METHOD');
    };

};


