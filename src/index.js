import registerServiceWorker from "./registerServiceWorker";
import { Application } from 'pixi.js';
import Switcher from "./Mode/Switcher";

// export const app = new Application({
//   width: window.innerWidth - 15,
//   height: window.innerHeight - 25,
//   backgroundColor: 0x000000,
// });

// export const system = new System();
// document.body.appendChild(app.view);
export const switcher = new Switcher('2D');
// console.log(switcher);
// export const system = switcher.system;







registerServiceWorker();
