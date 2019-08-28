import {DisplayMode, Engine} from "excalibur";
import {loader} from "./resources";

export default class Game {
    public readonly width = 480;
    public readonly height = 270;

    public readonly engine = new Engine({
        width: this.width,
        height: this.height,
        displayMode: DisplayMode.Fixed
    });

    constructor() {
        this.engine.canvas.style.position = "absolute";
        (this.engine.canvas.style as any).imageRendering = "pixelated";
    }

    public start(): void {
        this.engine.start(loader)
            .error(reason => console.error(reason));
    }
}