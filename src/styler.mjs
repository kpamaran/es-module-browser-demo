import { log } from './logger.mjs';

export function paintBackground(color) {
    document.body.style.backgroundColor = color;
    log(`Painted background ${color}`);
}

export function paintFont(color) {
    document.body.style.color = color
    log(`Painted font color ${color}`);
}

export function unusedPaintMethod(el, color) {
    el.style.color = color;
    log(`[Unexpected Usage] Painted ${el} font color ${color}`);
}