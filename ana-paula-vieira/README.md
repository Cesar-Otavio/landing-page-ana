# Ana Paula Vieira — Branch `refeito/html`

> Esta branch é uma reescrita estática do projeto original (branch `main`), convertendo todas as páginas PHP para HTML puro, CSS e JavaScript — sem dependências de servidor — permitindo a publicação direta na **Netlify** ou qualquer plataforma de hospedagem estática.

---

## Sobre esta Branch

|                             | `main`                | `refeito/html`                    |
| --------------------------- | --------------------- | --------------------------------- |
| Linguagem                   | PHP + SCSS            | HTML + CSS + JS                   |
| Servidor necessário         | Sim (Apache + PHP)    | Não                               |
| Hospedagem                  | Hostinger, 000webhost | **Netlify**, GitHub Pages, Vercel |
| Configuração centralizada   | `includes/config.php` | Valores fixos no HTML             |
| URLs limpas via `.htaccess` | Sim                   | Não necessário                    |

> Esta branch **não deve ser mergeada na `main`**. Ela existe exclusivamente para deploy em plataformas estáticas.

---

## Estrutura

```
📦ana-paula-vieira
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜style.css          # CSS compilado único (gerado a partir do SCSS da main)
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂ana                # Fotos da mentora
 ┃ ┃ ┣ 📂comentarios        # Fotos dos depoimentos
 ┃ ┃ ┣ 📂icons              # Ícones e favicon
 ┃ ┃ ┗ 📂logos              # Logos em variações de cor
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📜carrossel-liberdade.js   # Carrossel de depoimentos
 ┃ ┃ ┣ 📜liberdade.js             # Scripts da página Liberdade
 ┃ ┃ ┣ 📜main.js                  # Scripts globais
 ┃ ┃ ┣ 📜modal-liberdade.js       # Modal da Liberdade
 ┃ ┃ ┗ 📜modal.js                 # Modal de cookies
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📜liberdade.html    # Landing page — Mentoria Liberdade Sistêmica
 ┃ ┃ ┗ 📜raizes.html       # Landing page — Método Raízes do Corpo®
 ┣ 📜.gitignore
 ┣ 📜index.html             # Hub principal
 ┗ 📜README.md
```

---

## O que foi convertido

### PHP → HTML

- `index.php` → `index.html`
- `assets/pages/liberdade.php` → `assets/pages/liberdade.html`
- `assets/pages/raizes.php` → `assets/pages/raizes.html`

### Includes PHP → Inline HTML

| Include removido               | Solução adotada                                            |
| ------------------------------ | ---------------------------------------------------------- |
| `includes/config.php`          | Valores fixos diretamente no HTML                          |
| `includes/modal.php`           | Modal de cookies colado inline no `index.html`             |
| `includes/modal-liberdade.php` | Modal do Raízes do Corpo colado inline no `liberdade.html` |

### SCSS → CSS

- Toda a estilização foi compilada em um único arquivo `assets/css/style.css`
- Os arquivos `.scss` da `main` **não existem** nesta branch

### Variáveis PHP → Valores fixos

| Variável              | Valor aplicado                              |
| --------------------- | ------------------------------------------- |
| `SITE_NAME`           | `Ana Paula Vieira`                          |
| `SITE_URL`            | `https://metodoraizesdocorpo.com.br`        |
| `WHATSAPP_LIBERDADE`  | URL completa do WhatsApp                    |
| `INSTAGRAM`           | `https://www.instagram.com/anavieirapitta/` |
| `get_current_year()`  | `2026`                                      |
| `get_whatsapp_link()` | URL `wa.me` com mensagem encodada           |

---

## Deploy na Netlify

1. No GitHub, selecione a branch `refeito/html`
2. Acesse [netlify.com](https://netlify.com) e clique em **Add new site → Import an existing project**
3. Conecte seu repositório GitHub
4. Em **Branch to deploy**, selecione `refeito/html`
5. Deixe **Build command** vazio
6. Em **Publish directory**, deixe `/` (raiz)
7. Clique em **Deploy site**

> Nenhuma configuração de build é necessária — o projeto é 100% estático.

---

## Páginas

| Página                       | Arquivo                       | URL esperada                                          |
| ---------------------------- | ----------------------------- | ----------------------------------------------------- |
| Hub principal                | `index.html`                  | `metodoraizesdocorpo.com.br`                          |
| Mentoria Liberdade Sistêmica | `assets/pages/liberdade.html` | `liberdade.metodoraizesdocorpo.com.br`                |
| Método Raízes do Corpo®      | `assets/pages/raizes.html`    | `metodoraizesdocorpo.com.br/assets/pages/raizes.html` |

---

## Atualização de conteúdo

Como não há backend, qualquer alteração de texto, URL ou contato deve ser feita **diretamente nos arquivos HTML**. Os pontos mais comuns de atualização são:

- **WhatsApp** — buscar por `api.whatsapp.com` ou `wa.me` nos três arquivos
- **Preço da mentoria** — buscar por `997` no `liberdade.html`
- **Ano do footer** — buscar por `2026` nos arquivos
- **Instagram** — buscar por `anavieirapitta`

---

## Cliente

**Ana Paula Vieira** — Mentora em Saúde Integrativa e Sistêmica

- Instagram: [@anavieirapitta](https://www.instagram.com/anavieirapitta/)
- Site: [metodoraizesdocorpo.com.br](https://metodoraizesdocorpo.com.br)

---

## Desenvolvimento

Projeto desenvolvido por **Cesar Otavio da Silva Boiani** como trabalho freelancer.

_Para a versão com PHP e SCSS, consulte a branch `main`._
