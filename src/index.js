import registerServiceWorker from "./registerServiceWorker";
import Switcher from "./Mode/Switcher";

export const switcher = new Switcher('2D');

registerServiceWorker();
