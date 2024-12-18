// content.js

console.log("Content script injetado na página");

const localStorageData = localStorage;

// Envia os dados do localStorage para o pop-up
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getLocalStorage") {
        let data = {};
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);

            // Tenta parsear como JSON se possível
            try {
                data[key] = JSON.parse(value);
            } catch (e) {
                data[key] = value;
            }
        }

        sendResponse(data); // Envia os dados para o pop-up
    }

    // Ação para limpar o localStorage
    if (message.action === "clearLocalStorage") {
        localStorage.clear(); // Limpa o localStorage
        sendResponse(); // Responde para indicar que o processo foi concluído
    }

    // Ação para remover um item do localStorage
    if (message.action === "removeLocalStorageItem") {
        const key = message.key;
        localStorage.removeItem(key); // Remove a chave do localStorage
        sendResponse(); // Responde para indicar que o item foi removido
    }

    return true; // Indica que a resposta será assíncrona
});
