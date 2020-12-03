log('Loaded `logger` module');

var shift = 0;

export function log(message) {
    const logEl = document.createElement('span');
    logEl.classList.add('log-entry')
    logEl.textContent = message;
    logEl.style.marginLeft = `${shift += 20}px`;
    document.getElementById('logs').appendChild(logEl)
}

export function unusedLog(message) {
    log('[Unexpected Usage] invoked unusedLog.');
}