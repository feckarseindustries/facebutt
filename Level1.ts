import {Scene} from "excalibur";
import Game from "./Game";
import {FriendlySheepie} from "./sheepies/FriendlySheepie";
import {red} from "./sheepies/FriendlySheepieType";
import {Sheepie} from "./sheepies/Sheepie";

export default class Level1 extends Scene {
    private protagonist: Sheepie;
    private game: Game;

    constructor(game: Game) {
        super(game.engine);
        this.game = game;
        this.protagonist = new Sheepie(this.game);
        this.add(this.protagonist);
        this.add(this.spawnSheep());
        this.add(this.spawnSheep());
        this.add(this.spawnSheep());
    }

    private spawnSheep(): FriendlySheepie {
        return new FriendlySheepie(this.game, this.protagonist, red);
    }
}