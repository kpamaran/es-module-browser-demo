import { log } from './logger.mjs';
log('Loaded `main` module');

const importModule = () => {
    import('./styler.mjs')
        .then(Styler => {
            log('Dynamically loaded `styler` module')
            Styler.paintBackground('#67OC17');
            Styler.paintFont('#FFFFFF');
        });

    import('./chat.mjs')
        .then(Chat => {
            log('Dynamically loaded `chat` module')
            Chat.initChatPrompt();
        })
}

document.getElementById('load-dynamic-js')
    .addEventListener('click', importModule);