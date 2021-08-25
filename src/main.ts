import kaboom from "kaboom";
import { KaboomCtx } from "kaboom";

// initialize kaboom context
const k = kaboom({
    clearColor: [0, 0, 0, 1],
});

function createLabel(k: KaboomCtx, message: string) {
    k.add([
        k.text(message, 32),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.color(1, 1, 1, 1),
        k.origin('center')
    ])
}

k.scene('main', () => {
    createLabel(k, 'Game Over')
});

k.start('main');