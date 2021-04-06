import System2D from "../2D/System2D";
import System3D from "../3D/System3D";

System
export default class Switcher {
    constructor(baseMode) {
        this.system = null;
    }
    switch = (mode) => {
        if (mode === '2D') {
            this.system = new System2D();
        } else if (mode === '3D') {
            this.system = new System3D();
        } else {
            throw new Error("No such mode");
        };
    };
};