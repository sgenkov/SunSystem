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
        const sphereGeometry = new THREE.SphereGeometry(this.radius / 70, 32, 32);
        const sphereMaterial = new THREE.MeshStandardMaterial({ color: this.color });
        this.body = new THREE.Mesh(sphereGeometry, sphereMaterial);

        this.body.castShadow = true; //default is false
        this.body.receiveShadow = true; //default
    };
    updatePosition = () => {
        this.updateInnerCycle();
        const scale = 52;
        if (this.PARENT) {
            this.body.position.x = this.orbitalRadius * Math.cos(this.cycle) + this.PARENT.orbitalRadius * Math.cos(this.PARENT.cycle);
            this.body.position.y = this.orbitalRadius * Math.sin(this.cycle) + this.PARENT.orbitalRadius * Math.sin(this.PARENT.cycle);
        } else {
            this.body.position.x = this.orbitalRadius * Math.cos(this.cycle);
            this.body.position.y = this.orbitalRadius * Math.sin(this.cycle);
        };

        this.body.position.x /= scale;
        this.body.position.y /= scale;

        this.position = this.body.position;

    };

    updateInnerCycle = () => {
        if (this.cycle < 360) {
            this.cycle += this.speed;
        } else {
            this.cycle = 0;
        };
    };


};


