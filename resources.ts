import {Loader, Sound, Texture} from "excalibur";
import jodieBaaaMp3 from "./sheepies/jodieBaaa.mp3";
import sheepiePng from "./sheepies/sheepie.png";
import sheepieBlue from "./sheepies/sheepie-blue.png";
import sheepieGreen from "./sheepies/sheepie-green.png";
import sheepieOrange from "./sheepies/sheepie-orange.png";
import sheepiePurple from "./sheepies/sheepie-purple.png";
import sheepieRed from "./sheepies/sheepie-red.png";
import sheepieYellow from "./sheepies/sheepie-yellow.png";

export const loader = new Loader();

const leftFlipper = (s:{left: Texture}) => s.left.asSprite().flipHorizontal = true;
const loadifier = (s:{left: Texture, right: Texture}) => {
    loader.addResource(s.left);
    loader.addResource(s.right);
};
export const sheepie = {
    left: new Texture(sheepiePng),
    right: new Texture(sheepiePng)
};
leftFlipper(sheepie);
loadifier(sheepie);

export const rainbowSheepies = [
    {
        left: new Texture(sheepieRed),
        right: new Texture(sheepieRed)
    }, {
        left: new Texture(sheepieOrange),
        right: new Texture(sheepieOrange)
    }, {
        left: new Texture(sheepieYellow),
        right: new Texture(sheepieYellow)
    }, {
        left: new Texture(sheepieGreen),
        right: new Texture(sheepieGreen)
    }, {
        left: new Texture(sheepieBlue),
        right: new Texture(sheepieBlue)
    }, {
        left: new Texture(sheepiePurple),
        right: new Texture(sheepiePurple)
    }
];
rainbowSheepies.forEach(leftFlipper);
rainbowSheepies.forEach(loadifier);

export const bleat = new Sound(jodieBaaaMp3);
loader.addResource(bleat);
