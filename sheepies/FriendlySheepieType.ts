import {
    blueSheepie,
    greenSheepie,
    LeftAndRightTexturePair,
    orangeSheepie, purpleSheepie,
    redSheepie,
    yellowSheepie
} from "../resources";

export interface RainbowSheepieType {
    name: string;
    baseSpeed: number;
    images: LeftAndRightTexturePair;
}

export const red: RainbowSheepieType = {
    name: "Red",
    baseSpeed: 6 * 60 / 1000,
    images: redSheepie
};
export const orange: RainbowSheepieType = {
    name: "Orange",
    baseSpeed: 6.5 * 60 / 1000,
    images: orangeSheepie
};
export const yellow: RainbowSheepieType = {
    name: "Yellow",
    baseSpeed: 7 * 60 / 1000,
    images: yellowSheepie
};
export const green: RainbowSheepieType = {
    name: "Green",
    baseSpeed: 7.5 * 60 / 1000,
    images: greenSheepie
};
export const blue: RainbowSheepieType = {
    name: "Blue",
    baseSpeed: 8 * 60 / 1000,
    images: blueSheepie
};
export const purp: RainbowSheepieType = {
    name: "Purp",
    baseSpeed: 8.5 * 60 / 1000,
    images: purpleSheepie
};
