// popup.js

// Função para exibir o conteúdo do localStorage da página
function mostrarArmazenamentoLocal() {
    const contentDiv = document.getElementById("storage-content");

    // Limpa o conteúdo anterior
    contentDiv.innerHTML = "";

    // Envia a mensagem para o content script buscar os dados do localStorage da página
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];

        if (activeTab && activeTab.id) {
            chrome.tabs.sendMessage(activeTab.id, { action: "getLocalStorage" }, function (response) {
                if (chrome.runtime.lastError) {
                    // Caso haja erro, mostra uma mensagem no pop-up
                    contentDiv.innerHTML = "<p>Não foi possível acessar o localStorage da página. Verifique se o content script está ativo.</p>";
                    return;
                }

                // Se não houver dados no localStorage
                if (!response || Object.keys(response).length === 0) {
                    contentDiv.innerHTML = "<p>O armazenamento local da página está vazio.</p>";
                    return;
                }

                // Itera sobre os dados e exibe no pop-up
                for (const [key, value] of Object.entries(response)) {
                    let div = document.createElement("div");
                    div.classList.add("key-value");

                    // Exibe a chave
                    let keyElement = document.createElement("div");
                    keyElement.classList.add("key");
                    keyElement.innerHTML = `<strong>${key}</strong>:`;

                    // Exibe o valor de maneira formatada
                    let valueElement = document.createElement("pre");
                    valueElement.classList.add("value");

                    // Verifica se o valor é um objeto ou array e formata
                    if (typeof value === 'object' && value !== null) {
                        valueElement.innerHTML = JSON.stringify(value, null, 2); // Formata o valor com indentação
                    } else {
                        valueElement.innerHTML = value; // Caso não seja objeto, exibe o valor diretamente
                    }

                    div.appendChild(keyElement);
                    div.appendChild(valueElement);
                    contentDiv.appendChild(div);

                    // Adiciona um listener de clique para apagar a chave
                    div.addEventListener('click', function () {
                        apagarChave(key);
                    });
                }
            });
        }
    });
}

// Função para limpar o localStorage da página e recarregar a página
function limparArmazenamentoLocal() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];

        if (activeTab && activeTab.id) {
            chrome.tabs.sendMessage(activeTab.id, { action: "clearLocalStorage" }, function () {
                // Após limpar, recarrega a página para refletir a mudança
                chrome.tabs.reload(activeTab.id); // Recarrega a página sem afetar cookies ou sessão
            });
        }
    });
}

// Função para apagar uma chave do localStorage
function apagarChave(key) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];

        if (activeTab && activeTab.id) {
            chrome.tabs.sendMessage(activeTab.id, { action: "removeLocalStorageItem", key }, function () {
                mostrarArmazenamentoLocal(); // Atualiza a lista após apagar
            });
        }
    });
}

// Chama a função ao carregar o pop-up
document.addEventListener("DOMContentLoaded", mostrarArmazenamentoLocal);

// Adiciona o evento de clique no botão "Limpar"
document.getElementById("clear-button").addEventListener("click", limparArmazenamentoLocal);
