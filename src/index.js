import registerServiceWorker from "./registerServiceWorker";
import { Application } from 'pixi.js';
import System3D from "./3D/System3D";
import System2D from './2D/System2D';
import Switcher from "./Mode/Switcher";

export const app = new Application({
  width: window.innerWidth - 15,
  height: window.innerHeight - 25,
  backgroundColor: 0x000000,
});

// export const system = new System();
document.body.appendChild(app.view);


export const system = new System2D(); // 3D 







registerServiceWorker();
