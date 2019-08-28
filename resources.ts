import {Loader, Texture} from "excalibur";
import sheepiePng from "./sheepie.png";

export const loader = new Loader();

export const sheepie = new Texture(sheepiePng);
loader.addResource(sheepie);
