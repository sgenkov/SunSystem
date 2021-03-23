// import GlobesParser from "./GlobesParser";
// import base_scene from '../base_scene.json';
// export default class System {
//     constructor() {
//         this.globesParser = null;
//         this.position = {
//             x:0,
//             y:0
//         };
//         this.globes = [];
//         this.systemCycle = 0;
//         this.del = 0;
//         this.init();
//     };
    
//     init = () => {
//         this.globesParser = new GlobesParser(base_scene, this.globes);
//         this.globesParser.extractObjects();
//         // app.ticker.add(this.systemTicker);
//     };

//     systemTicker = () => {
//         // if (this.del < 7) {
//         //     this.del ++;
//         //     return;
//         // } else {
//         //     this.del = 0;
//         // };

//         this.updateCycle();
//         this.globes.forEach(globe => {
//             globe?.updatePosition();
//         });
//     };

//     updateCycle = () => {
//         if (this.systemCycle < 360) {
//             this.systemCycle ++;
//         } else {
//             this.systemCycle = 0;
//         };
//     };
// };