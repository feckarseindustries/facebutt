import {Engine, Vector} from "excalibur";
import {FriendlySheepie} from "../FriendlySheepie";
import {Sheepie} from "../Sheepie";

export interface MovementStyle {
    nextPositionToAdd(friendlySheepie: FriendlySheepie, engine: Engine, delta: number, protagonist: Sheepie): Vector;
    startingPosition(): Vector;
}