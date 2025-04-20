import "@babylonjs/core/Culling/ray";
import { Engine } from "@babylonjs/core/Engines/engine";

import { Game } from './game.js';
import { createScene } from './createScene.js';
import { createInput } from './createInput.js';

const canvas = document.getElementById('renderCanvas');
Game.canvas = canvas;
const engine = new Engine(canvas);
Game.engine = engine;

createScene();
createInput();

engine.runRenderLoop(function () {
    Game.scene.render();
});

window.addEventListener('resize', function() {
    Game.scene.resize();
});
