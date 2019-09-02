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

export interface LeftAndRightTexturePair {
    left: Texture;
    right: Texture;
}

export const sheepie: LeftAndRightTexturePair = {
    left: new Texture(sheepiePng),
    right: new Texture(sheepiePng)
};
export const redSheepie: LeftAndRightTexturePair = {
    left: new Texture(sheepieRed),
    right: new Texture(sheepieRed)
};
export const orangeSheepie: LeftAndRightTexturePair = {
    left: new Texture(sheepieOrange),
    right: new Texture(sheepieOrange)
};
export const yellowSheepie: LeftAndRightTexturePair = {
    left: new Texture(sheepieYellow),
    right: new Texture(sheepieYellow)
};
export const greenSheepie: LeftAndRightTexturePair = {
    left: new Texture(sheepieGreen),
    right: new Texture(sheepieGreen)
};
export const blueSheepie: LeftAndRightTexturePair = {
    left: new Texture(sheepieBlue),
    right: new Texture(sheepieBlue)
};
export const purpleSheepie: LeftAndRightTexturePair = {
    left: new Texture(sheepiePurple),
    right: new Texture(sheepiePurple)
};

// Flip the left image so it's facing left, and load into the game
[sheepie, redSheepie, orangeSheepie, yellowSheepie, greenSheepie, blueSheepie, purpleSheepie].forEach(s => {
    s.left.asSprite().flipHorizontal = true;
    loader.addResource(s.left);
    loader.addResource(s.right);
});

export const bleat = new Sound(jodieBaaaMp3);
loader.addResource(bleat);
