# ClearTab - Chrome Extension

**ClearTab** é uma extensão do Chrome que permite gerenciar o `localStorage` de uma página da web. Ela oferece a capacidade de visualizar, apagar ou limpar completamente os dados armazenados no `localStorage`. Essa extensão é útil para desenvolvedores que precisam testar o comportamento de páginas ao manipular o armazenamento local, sem afetar outras partes da sessão de navegação.

---

## Funcionalidades

- **Visualizar o localStorage**: Exibe as chaves e valores armazenados no `localStorage` da página atual.
- **Excluir uma chave específica**: Permite que o usuário clique em qualquer chave para apagá-la.
- **Limpar o localStorage**: Apaga todos os dados do `localStorage` da página atual e recarrega a página.

---

## Instalação

Para instalar a extensão **ClearTab** no seu navegador Chrome:

1. **Baixe o repositório**:
   - Faça um **fork** ou clique no botão **Clone** no GitHub para clonar o repositório para o seu computador.

2. **Carregue a extensão no Chrome**:
   - Abra o Chrome e vá até `chrome://extensions/`.
   - Habilite o **Modo de desenvolvedor** no canto superior direito.
   - Clique em **Carregar sem compactação**.
   - Selecione a pasta do seu projeto onde o código da extensão está localizado.
   
3. **Teste a extensão**:
   - Abra qualquer página web, clique no ícone da extensão na barra de ferramentas e veja o localStorage dessa página.
   - Você pode limpar ou excluir as chaves diretamente da interface.

---

## Como Usar

1. **Visualizar o localStorage**:
   - Clique no ícone da extensão na barra de ferramentas do Chrome. Isso abrirá a interface da extensão com uma lista de chaves e valores armazenados no `localStorage` da página.
   
2. **Excluir uma chave específica**:
   - Clique na chave que deseja remover. O valor correspondente será apagado do `localStorage` e a interface será atualizada.

3. **Limpar o localStorage**:
   - Clique no botão "Limpar" para apagar todos os dados armazenados no `localStorage` da página.

---

## Tecnologias Usadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Chrome Extensions API**

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
