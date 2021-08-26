import kaboom from "kaboom";
import { KaboomCtx } from "kaboom";

// initialize kaboom context
const k = kaboom({
    clearColor: [0, 0, 0, 1],
    debug: true,
});

function createLabel(k: KaboomCtx, message: string) {
    k.add([
        k.text(message, 32),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.color(1, 1, 1, 1),
        k.origin('center')
    ])
}

k.loadSprite('player', './assets/sprites/player.bmp')
k.loadSprite('bg', './assets/sprites/bg.jpg')
// k.loadSprite('asteroid', './assets/sprites/asteroid.jpg')

k.scene('main', () => {
    createLabel(k, 'Game Over')
});

k.start('main');