import {Actor, Engine, Input, Vector} from "excalibur";
import Game from "../Game";
import {bleat, sheepie} from "../resources";

export class Sheepie extends Actor {

    private readonly speed: number;
    private readonly gameHeight: number;
    private readonly gameWidth: number;
    private bleatDistance: number = 50;

    constructor(game: Game) {
        super({
            x: game.width * 0.5,
            y: game.height * 0.5,
            width: 30,
            height: 30
        });
        this.gameHeight = game.height;
        this.gameWidth = game.width;
        this.speed = sheepie.baseSpeed;
        this.addDrawing("right", sheepie.right.asSprite());
        this.addDrawing("left", sheepie.left.asSprite());
    }

    public bleatedAt(bleateePostion: Vector): boolean {
        return bleat.isPlaying() && this.pos.distance(bleateePostion) <= this.bleatDistance;
    }

    public update(engine: Engine, delta: number): void {
        super.update(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            if (bleat.isPlaying()) {
                bleat.stop();
            }
            bleat.play();
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Left) && this.pos.x > 0) {
            this.setDrawing("left");
            this.pos.x -= this.speed * delta;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Right) && this.pos.x < this.gameWidth) {
            this.setDrawing("right");
            this.pos.x += this.speed * delta;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Up) && this.pos.y > 0) {
            this.pos.y -= this.speed * delta;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Down) && this.pos.y < this.gameHeight) {
            this.pos.y += this.speed * delta;
        }
    }
}