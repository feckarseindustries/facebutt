import {Loader, Sound, Texture} from "excalibur";
import sheepiePng from "./sheepie.png";
import jodieBaaaMp3 from "./jodieBaaa.mp3";

export const loader = new Loader();

export const sheepie = new Texture(sheepiePng);
loader.addResource(sheepie);

export const bleat = new Sound(jodieBaaaMp3);
loader.addResource(bleat);
