import { Engine } from "@babylonjs/core/Engines/engine";

const canvas = document.getElementById('renderCanvas');
const engine = new Engine(canvas);

import('./createScene').then(module => {
    const scene = module.createScene(engine);

    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener('resize', function() {
        engine.resize();
    });
});