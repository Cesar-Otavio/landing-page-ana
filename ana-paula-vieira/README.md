# Ana Paula Vieira — Landing Pages & Presença Digital

> Projeto desenvolvido como **freelancer** para [Ana Paula Vieira](https://www.instagram.com/anavieirapitta/), mentora em Saúde Integrativa e Sistêmica, criadora do **Método Raízes do Corpo®** e da **Mentoria Liberdade Sistêmica**.

---

## Sobre o Projeto

Este projeto é composto por um ecossistema de landing pages interligadas, desenvolvidas para apresentar os produtos digitais e serviços de Ana Paula Vieira. O objetivo foi criar uma presença digital coesa, elegante e de alta conversão — alinhada à identidade visual e à proposta terapêutica da mentora.

O sistema é estruturado em três camadas:

- **Página principal** (`index.php`) — hub de navegação entre os produtos
- **Mentoria Liberdade Sistêmica** (`liberdade.php`) — página de vendas completa com carrossel de depoimentos, seção de preços, FAQ e CTA integrado ao WhatsApp
- **Método Raízes do Corpo®** (`raizes.php`) — página de apresentação do método com timeline de trajetória, os 5 pilares e seção de conversão

---

## Links

| Destino                      | URL                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| Site principal               | [metodoraizesdocorpo.com.br](https://metodoraizesdocorpo.com.br)                     |
| Mentoria Liberdade Sistêmica | [liberdade.metodoraizesdocorpo.com.br](https://liberdade.metodoraizesdocorpo.com.br) |
| Instagram da Ana             | [@anavieirapitta](https://www.instagram.com/anavieirapitta/)                         |

---

## Tecnologias Utilizadas

| Tecnologia                     | Uso                                                         |
| ------------------------------ | ----------------------------------------------------------- |
| **PHP 8+**                     | Estrutura das páginas, includes e configuração centralizada |
| **SCSS / Sass**                | Estilização modular com variáveis, mixins e partials        |
| **CSS3**                       | Animações, responsividade e layout                          |
| **JavaScript (Vanilla)**       | Carrossel de depoimentos, FAQ accordion e modais            |
| **HTML5 semântico**            | Estrutura acessível e otimizada para SEO                    |
| **Apache / .htaccess**         | Remoção de `.php` das URLs e proteção de diretórios         |
| **Google Fonts**               | Tipografia: Playfair Display + Poppins                      |
| **Schema.org (JSON-LD)**       | SEO avançado com rich results para Google                   |
| **Open Graph + Twitter Cards** | Compartilhamento otimizado em redes sociais                 |

---

## Estrutura do Projeto

```
📦ana-paula-vieira
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂ana              # Fotos da mentora
 ┃ ┃ ┣ 📂comentarios      # Fotos dos depoimentos
 ┃ ┃ ┣ 📂icons            # Ícones e favicon
 ┃ ┃ ┗ 📂logos            # Logos em variações de cor
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📜carrossel-liberdade.js   # Carrossel de depoimentos
 ┃ ┃ ┣ 📜liberdade.js             # Scripts da página Liberdade
 ┃ ┃ ┣ 📜main.js                  # Scripts globais
 ┃ ┃ ┣ 📜modal-liberdade.js       # Modal da Liberdade
 ┃ ┃ ┗ 📜modal.js                 # Modal global
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜liberdade.php    # Landing page — Mentoria Liberdade Sistêmica
 ┃ ┃ ┗ 📜raizes.php       # Landing page — Método Raízes do Corpo®
 ┃ ┗ 📂scss
 ┃ ┃ ┣ 📂mixins           # Mixins reutilizáveis
 ┃ ┃ ┣ 📂modal            # Estilos dos modais
 ┃ ┃ ┣ 📂reset            # Reset CSS
 ┃ ┃ ┣ 📂variables        # Variáveis globais (cores, fontes, breakpoints)
 ┃ ┃ ┣ 📜style.scss       # Entry point do SCSS
 ┃ ┃ ┣ 📜_liberdade.scss  # Estilos da página Liberdade
 ┃ ┃ ┗ 📜_raizes.scss     # Estilos da página Raízes
 ┣ 📂includes
 ┃ ┣ 📜config.php         # Configuração centralizada (URLs, contatos, helpers)
 ┃ ┣ 📜modal-liberdade.php
 ┃ ┗ 📜modal.php
 ┣ 📜.htaccess            # URLs limpas + proteção de diretórios
 ┣ 📜index.php            # Hub principal
 ┗ 📜README.md
```

---

## Configuração

Todas as informações centrais do projeto ficam em `includes/config.php`:

```php
define('SITE_NAME', 'Ana Paula Vieira');
define('SITE_URL', 'https://metodoraizesdocorpo.com.br');
define('WHATSAPP_NUMBER', '5516996180382');
define('WHATSAPP_LIBERDADE', 'https://api.whatsapp.com/send/?phone=...');
define('INSTAGRAM', 'https://www.instagram.com/anavieirapitta/');
```

Para atualizar número de WhatsApp, URLs ou redes sociais, basta editar este arquivo — todas as páginas refletem a mudança automaticamente.

---

## Segurança e SEO

- `Options -Indexes` no `.htaccess` — impede listagem de diretórios
- URLs limpas sem `.php` via mod_rewrite
- Headers de segurança (`X-Frame-Options`, `X-XSS-Protection`, `X-Content-Type-Options`)
- Schema.org estruturado (`Person`, `ProfessionalService`, `OfferCatalog`) para rich results no Google
- Canonical tags por página
- Open Graph e Twitter Cards configurados por página

---

## Responsividade

O layout é totalmente responsivo com breakpoints para:

- **Desktop** — acima de 1024px
- **Tablet** — até 768px
- **Mobile** — até 480px

---

## Sobre a Cliente

**Ana Paula Vieira** é fisioterapeuta, terapeuta sistêmica e mentora em Saúde Integrativa. Criadora do **Método Raízes do Corpo®** — que integra Fisioterapia, Osteopatia, Constelação Familiar e Nova Medicina Germânica — e da **Mentoria Liberdade Sistêmica**, voltada para mulheres que buscam se libertar de padrões emocionais e viver com mais leveza.

- Instagram: [@anavieirapitta](https://www.instagram.com/anavieirapitta/)
- Site: [metodoraizesdocorpo.com.br](https://metodoraizesdocorpo.com.br)

---

## Desenvolvimento

Projeto desenvolvido por **Cesar Otavio da Silva Boiani** como trabalho freelancer.

---

_Feito com cuidado para uma profissional que transforma vidas._
