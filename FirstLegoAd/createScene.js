import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import "@babylonjs/core/Materials/standardMaterial";

const canvas = document.getElementById('renderCanvas');

export function createScene(engine) {
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
        "camera",
        Math.PI / 2,
        Math.PI / 4,
        10,
        Vector3.Zero(),
        scene);
    camera.attachControl(canvas, true); // Enable mouse controls
    camera.radius = 5;

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    const box = MeshBuilder.CreateIcoSphere("MainBox");
    
    return scene;
}