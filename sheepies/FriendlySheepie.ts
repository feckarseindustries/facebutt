import {Actor, Engine, Input, Vector} from "excalibur";
import Game from "../Game";
import {rainbowSheepies, sheepie} from "../resources";
import {Sheepie} from "./Sheepie";

const maxSpeed = 6 * 60 / 1000;
const rushDistance = 300;

export class FriendlySheepie extends Actor {
    private readonly followTarget: Sheepie;
    private readonly relativeX: number; // in radians
    private readonly relativeY: number;

    constructor(game: Game, followTarget: Actor) {
        super({
            x: game.width * 0.5,
            y: game.height * 0.5,
            width: 30,
            height: 30
        });
        const randomColour = rainbowSheepies[Math.floor(Math.random() * rainbowSheepies.length)];
        this.addDrawing("left", randomColour.left.asSprite());
        this.addDrawing("right", randomColour.right.asSprite());
        this.followTarget = followTarget;

        // Have a target location around the follow target that is distributed in a circle
        const angleRelativeToTarget = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 80;
        this.relativeX = Math.sin(angleRelativeToTarget) * distance;
        this.relativeY = Math.cos(angleRelativeToTarget) * distance;
    }

    public update(engine: Engine, delta: number): void {
        // Follow primary sheepie
        const homeX = this.followTarget.x + this.relativeX;
        const homeY = this.followTarget.y + this.relativeY;

        // Slow down as we get closer
        const dx = homeX - this.x;
        const dy = homeY - this.y;
        const distanceFromTarget = Math.sqrt(dx ^ 2 + dy ^ 2);

        const speed = maxSpeed;

        const vector = new Vector(dx, dy).normalize().scale(speed * delta);
        this.pos = this.pos.add(vector);
    }
}