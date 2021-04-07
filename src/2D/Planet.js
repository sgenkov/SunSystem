import { Graphics } from 'pixi.js';
// import { app } from '../index';
import { switcher } from '../index';

export default class Planet {
    constructor(name, position, radius, speed, color, orbitalRadius, parentName) {
        this.name = name;
        this.position = position;
        this.radius = radius;
        this.speed = speed;
        this.orbitalRadius = orbitalRadius;
        this.parentName = parentName;
        this.cycle = 0;
        this.graphic = new Graphics();
        this.graphic.beginFill(color);
        this.graphic.lineStyle(0);
        this.graphic.drawCircle(position.x, position.y, radius);
        this.graphic.endFill();
    };
    updatePosition = () => {
        this.updateInnerCycle();
        if (this.PARENT) {
            this.graphic.x = this.PARENT.position.x + this.orbitalRadius * Math.cos(this.cycle);
            this.graphic.y = this.PARENT.position.y + this.orbitalRadius * Math.sin(this.cycle);
        } else {
            this.graphic.x = this.orbitalRadius * Math.cos(this.cycle);
            this.graphic.y = this.orbitalRadius * Math.sin(this.cycle);
        };
        this.position.x = this.graphic.x;
        this.position.y = this.graphic.y;
    };

    updateInnerCycle = () => {
        if (this.cycle < 360) {
            this.cycle += this.speed;
        } else {
            this.cycle = 0;
        };
    };

};


