import { ActionManager, ExecuteCodeAction } from "@babylonjs/core/Actions";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Game } from './game.js';

export function createInput() {
    const inputMap = {};

    Game.scene.actionManager = new ActionManager(Game.scene);

    Game.scene.actionManager.registerAction(new ExecuteCodeAction(
        ActionManager.OnKeyDownTrigger,
        evt => inputMap[evt.sourceEvent.key] = true
    ));
    
    Game.scene.actionManager.registerAction(new ExecuteCodeAction(
        ActionManager.OnKeyUpTrigger,
        evt => inputMap[evt.sourceEvent.key] = false
    ));

    Game.scene.onBeforeRenderObservable.add(() => {
        let forward = Game.camera.getForwardRay().direction;
        
        // Zero out the Y component to restrict movement to the XZ plane
        forward.y = 0;
        
        // Normalize the vector
        forward.normalize();
        let right = new Vector3(-forward.z, forward.y, forward.x);

        let movement = null;
        
        const speed = 0.1;
        if (inputMap["w"])
            movement = forward.scale(speed);

        if (inputMap["a"]) 
            movement = right.scale(speed);

        if (inputMap["s"]) 
            movement = forward.scale(speed).negate();

        if (inputMap["d"])
            movement = right.scale(speed).negate();

        if (movement) {
            Game.cube.position = Game.cube.position.add(movement);

            let angle = Math.atan2(movement.x, movement.z);
            Game.cube.rotation.y = angle;
        }
    });
}