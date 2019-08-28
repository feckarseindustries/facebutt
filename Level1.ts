import {Scene} from "excalibur";
import Game from "./Game";
import {Sheepie} from "./sheepies/Sheepie";

export default class Level1 extends Scene {
    constructor(game: Game) {
        super(game.engine);
        this.add(new Sheepie(game));
    }
}