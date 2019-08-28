import {Actor, Engine, Input} from "excalibur";
import Game from "../Game";
import {bleat, sheepie} from "../resources";

const speed = 5 * 60 / 1000;

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

        if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
            sheepie.asSprite().flipHorizontal = true;
            this.x -= speed * delta;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
            sheepie.asSprite().flipHorizontal = false;
            this.x += speed * delta;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Up)) {
            this.y -= speed * delta;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
            this.y += speed * delta;
        }
    }
}