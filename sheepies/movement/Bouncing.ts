import {Engine, Vector} from "excalibur";
import {FriendlySheepie} from "../FriendlySheepie";
import {MovementStyle} from "./MovementStyle";

export class Bouncing implements MovementStyle {

    private readonly speed: number;
    private readonly gameHeight: number;
    private readonly gameWidth: number;

    private previousTarget: Vector;
    private currentTarget: Vector;

    constructor(speed: number, gameHeight: number, gameWidth: number) {
        this.speed = speed;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        // Initialise the first vector, it can just be a random point on the game wall
        const {from, to} = this.randomWallPointsFromAndTo();
        this.previousTarget = from;
        this.currentTarget = to;
    }

    public nextPositionToAdd(friendlySheepie: FriendlySheepie, engine: Engine, delta: number): Vector {
        const newPosition = this.currentTarget.sub(friendlySheepie.pos).normalize().scale(this.speed * delta);

        // tslint:disable-next-line:max-line-length
        if (newPosition.x > this.gameWidth || newPosition.x < 0 || newPosition.y > this.gameHeight || newPosition.y < 0) {
            // Time to find a new target
            const bloop = this.previousTarget;
            this.previousTarget = this.currentTarget;
            this.currentTarget = bloop;
        }
        return newPosition;
    }

    public startingPosition(): Vector {
        return this.previousTarget;
    }

    private randomWallPointsFromAndTo(): {from: Vector, to: Vector} {
        const randomFrom = Math.floor(Math.random() * 4);
        const isX = randomFrom < 2; // If the from position is on an x wall the target position must be on a y wall
        const randomTo = Math.floor(Math.random() * 2) + (isX ? 2 : 0);
        const points = [
            () => new Vector(0, Math.random() * this.gameHeight),
            () => new Vector(this.gameWidth, Math.random() * this.gameHeight),
            () => new Vector(Math.random() * this.gameWidth, 0),
            () => new Vector(Math.random() * this.gameWidth, this.gameHeight)
        ];
        return {from: points[randomFrom](), to: points[randomTo]()};
    }
}