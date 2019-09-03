import {
    blueSheepie,
    greenSheepie,
    LeftAndRightTexturePair,
    orangeSheepie, purpleSheepie,
    redSheepie,
    yellowSheepie
} from "../resources";
import {Bouncing} from "./movement/Bouncing";
import {MovementStyle} from "./movement/MovementStyle";

export interface RainbowSheepieType {
    name: string;
    baseSpeed: number;
    images: LeftAndRightTexturePair;
    getMovement(speed: number, gameHeight: number, gameWidth: number): MovementStyle;
}

export const red: RainbowSheepieType = {
    name: "Red",
    baseSpeed: 6 * 60 / 1000,
    images: redSheepie,
    getMovement: (speed, gameHeight, gameWidth) => new Bouncing(speed, gameHeight, gameWidth)
};
export const orange: RainbowSheepieType = {
    name: "Orange",
    baseSpeed: 6.5 * 60 / 1000,
    images: orangeSheepie,
    getMovement: (speed, gameHeight, gameWidth) => new Bouncing(speed, gameHeight, gameWidth)
};
export const yellow: RainbowSheepieType = {
    name: "Yellow",
    baseSpeed: 7 * 60 / 1000,
    images: yellowSheepie,
    getMovement: (speed, gameHeight, gameWidth) => new Bouncing(speed, gameHeight, gameWidth)
};
export const green: RainbowSheepieType = {
    name: "Green",
    baseSpeed: 7.5 * 60 / 1000,
    images: greenSheepie,
    getMovement: (speed, gameHeight, gameWidth) => new Bouncing(speed, gameHeight, gameWidth)
};
export const blue: RainbowSheepieType = {
    name: "Blue",
    baseSpeed: 8 * 60 / 1000,
    images: blueSheepie,
    getMovement: (speed, gameHeight, gameWidth) => new Bouncing(speed, gameHeight, gameWidth)
};
export const purp: RainbowSheepieType = {
    name: "Purp",
    baseSpeed: 8.5 * 60 / 1000,
    images: purpleSheepie,
    getMovement: (speed, gameHeight, gameWidth) => new Bouncing(speed, gameHeight, gameWidth)
};
