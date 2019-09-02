import {Actor, Engine, Vector} from "excalibur";
import Game from "../Game";
import {RainbowSheepieType} from "./FriendlySheepieType";
import {Sheepie} from "./Sheepie";

export class FriendlySheepie extends Actor {

    private static figureOutSpeed(distanceFromTarget: number, maxSpeed: number): number {
        const rushDistance = maxSpeed * 200;
        // speed is at max over the rush distance, otherwise it's at a proportion of the distance from target
        if (distanceFromTarget > rushDistance) {
            return maxSpeed;
        }
        return distanceFromTarget * ((1 / rushDistance) * maxSpeed);
    }
    private readonly followTarget: Sheepie;
    private readonly followTargetRelativePosition: Vector;
    private readonly sheepieType: RainbowSheepieType;
    private readonly maxSpeed: number;

    private shouldFollowSheepie: boolean = false;

    constructor(game: Game, followTarget: Sheepie, sheepieType: RainbowSheepieType) {
        super({
            x: game.width * Math.random(),
            y: game.height * Math.random(),
            width: 30,
            height: 30
        });
        this.sheepieType = sheepieType;

        // Randomise speed slightly so they don't move too uniformly
        this.maxSpeed = sheepieType.baseSpeed * ((1 + Math.random()) / 2);
        console.log(this.maxSpeed);
        this.addDrawing("left", this.sheepieType.images.left.asSprite());
        this.addDrawing("right", this.sheepieType.images.right.asSprite());
        this.followTarget = followTarget;

        // Have a target location around the follow target that is distributed in a circle
        const angleRelativeToTarget = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 80;
        this.followTargetRelativePosition = Vector.fromAngle(angleRelativeToTarget).scaleEqual(distance);
    }

    public draw(ctx: CanvasRenderingContext2D, delta: number): void {
        super.draw(ctx, delta); // perform base drawing logic

        const box = this.body.collider.bounds;
        // custom drawing
        box.getPoints().forEach((v, i, arr) => {
            const previous = (i === 0) ? arr[arr.length - 1] : arr[i - 1];
            ctx.beginPath();
            ctx.moveTo(previous.x, previous.y);
            ctx.lineTo(v.x, v.y);
            ctx.stroke();
        });
    }

    public update(engine: Engine, delta: number): void {
        if (this.shouldFollowSheepie) {
            this.followSheepie(engine, delta);
        } else {
            this.peepoSheepie(engine, delta);
        }
    }

    // later go in an arc
    private peepoSheepie(engine: Engine, delta: number): void {
        // Sit around waiting for a bleat
        if (this.followTarget.bleatedAt(this.pos)) {
            this.shouldFollowSheepie = true;
        }
    }

    private followSheepie(engine: Engine, delta: number): void {
        // Follow primary sheepie
        const targetSpot = this.followTarget.pos.add(this.followTargetRelativePosition);

        if (targetSpot.equals(this.pos)) {
            // On target, no need to move at all
            return;
        }

        // Slow down as we get closer
        const distanceFromTarget = this.pos.distance(targetSpot);
        const speed = FriendlySheepie.figureOutSpeed(distanceFromTarget, this.maxSpeed);
        const vector = targetSpot.sub(this.pos).normalize().scale(speed * delta);
        this.addNewVector(vector);
    }

    private addNewVector(vector: Vector): void {
        if (vector.x > 0) {
            // Heading right
            this.setDrawing("right");
        } else {
            this.setDrawing("left");
        }
        this.pos = this.pos.add(vector);
    }
}