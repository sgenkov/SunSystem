import Planet from "./Planet";

export default class GlobesParser {
    constructor(source, target) {
        this.source = source;
        this.target = target;
    };

    extractObjects = () => {
        this.source.globes.forEach(globe => {
            // if (globe.name !== "mars") return;
            const name = globe.name;
            const position = globe.position;
            const radius = globe.radius;
            const speed = globe.speed;
            const color = globe.color;
            const parent = globe.parent;
            const orbitalRadius = globe.orbitalRadius;
            this.target.push(new Planet(name, position, radius, speed, color, orbitalRadius, parent));
        });
    };

    assignParents = () => {
        this.target.forEach(globe => {
            if (globe.parentName) {
                globe.PARENT = this.target.find(Globe => Globe.name === globe.parentName);
            };
        });
    };
};