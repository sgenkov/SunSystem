import registerServiceWorker from "./registerServiceWorker";
import { Application } from 'pixi.js';
// import System from "./3D/System";
import System from './2D/System';

export const app = new Application({
  width: window.innerWidth - 15,
  height: window.innerHeight - 25,
  backgroundColor: 0x000000,
});

export const system = new System();
document.body.appendChild(app.view);


// export const system = new System(); // 3D 







registerServiceWorker();
