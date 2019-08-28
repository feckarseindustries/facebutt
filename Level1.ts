import {Scene} from "excalibur";
import Game from "./Game";
import {FriendlySheepie} from "./sheepies/FriendlySheepie";
import {Sheepie} from "./sheepies/Sheepie";

export default class Level1 extends Scene {
    constructor(game: Game) {
        super(game.engine);
        const sheepy = new Sheepie(game);
        this.add(sheepy);
        this.add(new FriendlySheepie(game, sheepy));
    }
}