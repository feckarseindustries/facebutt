import * as ex from "excalibur";
import Game from "./Game";
import {sheepie} from "./resources";

export class Sheepie extends ex.Actor {
    constructor(game: Game) {
        super({
            x: game.width * 0.5,
            y: game.height * 0.5,
            width: 30,
            height: 30
        });
        this.addDrawing(sheepie);
    }
}