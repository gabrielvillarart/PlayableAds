import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import "@babylonjs/core/Materials/standardMaterial";

import { Game } from './game.js';

const canvas = Game.canvas;

export function createScene() {
    const scene = new Scene(Game.engine);
    Game.scene = scene;

    const camera = new ArcRotateCamera(
        "camera",
        Math.PI / 2,
        Math.PI / 4,
        10,
        Vector3.Zero(),
        scene
    );
    Game.camera = camera;
    Game.camera.attachControl(canvas, true); // Enable mouse controls
    Game.camera.radius = 5;

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    Game.light = light;

    const box = MeshBuilder.CreateBox("MainBox");
    Game.cube = box;
}