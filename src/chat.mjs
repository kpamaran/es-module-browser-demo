import { log } from './logger.mjs';

export function initChatPrompt() {
    const chatPromptEl = document.createElement('button');
    chatPromptEl.textContent = 'Need help?';
    chatPromptEl.classList.add('chat-prompt');
    document.body.appendChild(chatPromptEl);
    log('Created chat prompt');
}