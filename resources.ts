import {Loader, Sound, Texture} from "excalibur";
import jodieBaaaMp3 from "./sheepies/jodieBaaa.mp3";
import sheepieBlue from "./sheepies/sheepie-blue.png";
import sheepieGreen from "./sheepies/sheepie-green.png";
import sheepieOrange from "./sheepies/sheepie-orange.png";
import sheepiePurple from "./sheepies/sheepie-purple.png";
import sheepieRed from "./sheepies/sheepie-red.png";
import sheepieYellow from "./sheepies/sheepie-yellow.png";
import sheepiePng from "./sheepies/sheepie.png";

export const loader = new Loader();

const leftFlipper = (s: (RainbowSheepieType)) => s.left.asSprite().flipHorizontal = true;
const loadifier = (s: (RainbowSheepieType)) => {
    loader.addResource(s.left);
    loader.addResource(s.right);
};
export const sheepie = {
    name: "Sheepie",
    baseSpeed: 5 * 60 / 1000,
    left: new Texture(sheepiePng),
    right: new Texture(sheepiePng)
};
leftFlipper(sheepie);
loadifier(sheepie);

export interface RainbowSheepieType {
    left: Texture;
    right: Texture;
    name: string;
    baseSpeed: number;
}

export const rainbowSheepies = [
    {
        name: "Red",
        baseSpeed: 6 * 60 / 1000,
        left: new Texture(sheepieRed),
        right: new Texture(sheepieRed)
    }, {
        name: "Orange",
        baseSpeed: 6.5 * 60 / 1000,
        left: new Texture(sheepieOrange),
        right: new Texture(sheepieOrange)
    }, {
        name: "Yellow",
        baseSpeed: 7 * 60 / 1000,
        left: new Texture(sheepieYellow),
        right: new Texture(sheepieYellow)
    }, {
        name: "Green",
        baseSpeed: 7.5 * 60 / 1000,
        left: new Texture(sheepieGreen),
        right: new Texture(sheepieGreen)
    }, {
        name: "Blue",
        baseSpeed: 8 * 60 / 1000,
        left: new Texture(sheepieBlue),
        right: new Texture(sheepieBlue)
    }, {
        name: "Purp",
        baseSpeed: 8.5 * 60 / 1000,
        left: new Texture(sheepiePurple),
        right: new Texture(sheepiePurple)
    }
];
rainbowSheepies.forEach(leftFlipper);
rainbowSheepies.forEach(loadifier);

export const bleat = new Sound(jodieBaaaMp3);
loader.addResource(bleat);
