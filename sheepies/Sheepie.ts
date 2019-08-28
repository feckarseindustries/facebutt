import {Actor, Engine, Input} from "excalibur";
import Game from "../Game";
import {bleat, sheepie} from "../resources";

export class Sheepie extends Actor {
    constructor(game: Game) {
        super({
            x: game.width * 0.5,
            y: game.height * 0.5,
            width: 30,
            height: 30
        });
        this.addDrawing(sheepie);
    }

    public update(engine: Engine, delta: number): void {
        super.update(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            if (bleat.isPlaying()) {
                bleat.stop();
            }
            bleat.play();
        }
    }
}