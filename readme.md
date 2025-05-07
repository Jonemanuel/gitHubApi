
## 🔍 GitHub User Explorer - Projeto com API do GitHub

Este projeto é uma aplicação simples feita com **JavaScript puro (Vanilla JS)** que consome a [API pública do GitHub](https://docs.github.com/en/rest) para buscar informações de qualquer usuário, incluindo:

* 👤 Dados do perfil (nome, bio, avatar, seguidores, etc.)
* 📁 Repositórios públicos
* 🕒 Eventos públicos recentes (commits, issues, stars, etc.)

---

### 🚀 Funcionalidades

✅ Buscar dados do usuário
✅ Listar repositórios públicos
✅ Mostrar eventos públicos recentes
✅ Código assíncrono com `async/await` e `fetch`

---

### 📦 Como usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse a pasta e abra o arquivo `index.js` em seu editor.

3. No final do arquivo, altere o nome de usuário desejado:

```js
const username = 'octocat'; // troque para qualquer usuário do GitHub
```

4. Execute com Node.js (caso use console):

```bash
node index.js
```

> Caso queira uma interface visual, você pode criar um `index.html` com campos de busca e exibir os resultados diretamente na tela!

---

### 🧠 O que você aprende com esse projeto

* Como consumir APIs REST com `fetch`
* Trabalhar com `async/await` e tratamento de erros
* Entender endpoints da API do GitHub
* Modularizar código JavaScript

---

### 🛠 Tecnologias utilizadas

* JavaScript (ES6+)
* GitHub REST API
* Node.js (opcional)

---

### 📄 Licença

MIT License

