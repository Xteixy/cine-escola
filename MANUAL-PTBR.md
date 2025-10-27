# Manual do Projeto (PT-BR)

Este manual explica como instalar, executar, parar, construir para produção e personalizar o projeto.

- Nome do projeto: `my-v0-project`
- Stack: Next.js 14 (App Router) + React 18 + Tailwind CSS 4 + pnpm
- URL padrão em desenvolvimento: `http://localhost:3000` (se ocupado, usa 3001, 3002, ...)

---

## 1) Pré-requisitos

- Node.js 18 ou superior (recomendado 18/20/22)
- pnpm (via Corepack)
- PowerShell (Windows) ou seu terminal preferido

Verifique versões:
```powershell
node --version
npm --version
pnpm --version
corepack --version
```
Se precisar ativar o pnpm via Corepack:
```powershell
corepack enable
corepack prepare pnpm@latest --activate
```

---

## 2) Instalar dependências

No diretório raiz do projeto:
```powershell
Set-Location "C:\Users\User\Desktop\SaaS\cine escola\cine-escola_4"
pnpm install
```
Dicas:
- Caso veja o aviso “Ignored build scripts”, é esperado para segurança do pnpm. Para aprovar scripts específicos: `pnpm approve-builds`.

---

## 3) Executar em desenvolvimento (ligar servidor)
```powershell
pnpm dev
```
- A aplicação ficará disponível em `http://localhost:3000`.
- Se a porta 3000 estiver em uso, o Next escolherá automaticamente outra porta (ex.: 3001).
- Para parar o servidor de desenvolvimento: pressione `Ctrl + C` no terminal.

---

## 4) Executar em produção local

Gerar build de produção e iniciar o servidor:
```powershell
pnpm build
pnpm start
```
- Para parar: `Ctrl + C`.

---

## 5) Estrutura de pastas importante

- `app/` — páginas (rotas), layouts e estilos globais do App Router
  - `app/page.tsx` — página inicial
  - `app/blog/page.tsx`, `app/filmes/page.tsx`, `app/tendencias/page.tsx`, `app/votacao/page.tsx`, `app/projecto-iokalia/page.tsx`
  - `app/layout.tsx` — layout global (head, fontes, tema)
  - `app/globals.css` — estilos globais principais
- `components/` — componentes reutilizáveis
  - `components/navbar.tsx`, `components/footer.tsx`
  - `components/hero-section.tsx`, `components/trending-section.tsx`, `components/blog-section.tsx`, `components/voting-section.tsx`
  - `components/ui/*` — biblioteca base de UI (botões, inputs, diálogos, etc.)
  - `components/theme-provider.tsx` — controle de tema (claro/escuro) usando `next-themes`
- `public/` — imagens e arquivos estáticos (logos, posters, etc.)
- `styles/` — CSS adicional (há também `styles/globals.css`)
- `lib/` — utilitários
- `next.config.mjs` — configurações do Next.js (atualmente ignora erros de TS/Lint em build e desativa otimização de imagens)

---

## 6) Personalização rápida

- Título/estrutura global: edite `app/layout.tsx`.
- Estilos globais: edite `app/globals.css` (e/ou `styles/globals.css`).
- Navbar/Footer: edite `components/navbar.tsx` e `components/footer.tsx`.
- Seções da Home: edite `components/hero-section.tsx`, `components/trending-section.tsx`, `components/blog-section.tsx`, `components/voting-section.tsx`.
- Páginas: edite os arquivos em `app/*/page.tsx` conforme a rota.
- Imagens/logos: substitua arquivos em `public/*` (você pode manter os nomes para não precisar mudar código).
- Tema claro/escuro: ajuste `components/theme-provider.tsx` (tema padrão, armazenamento, etc.).

---

## 7) Tailwind CSS (v4)

- O projeto já está configurado com Tailwind 4.
- As classes utilitárias podem ser usadas diretamente nos componentes.
- Configurações adicionais via `postcss.config.mjs`.

---

## 8) Tradução de textos para PT-BR

A maior parte dos textos está diretamente nos arquivos de páginas e componentes:
- Páginas: `app/*/page.tsx`
- Componentes: `components/*.tsx`

Basta editar o texto estático no JSX. Caso deseje internacionalização (i18n) completa com arquivos de mensagens, considere integrar uma biblioteca de i18n (ex.: `next-intl` ou `react-intl`).

---

## 9) Comandos úteis

- Desenvolvimento: `pnpm dev`
- Build de produção: `pnpm build`
- Servir produção: `pnpm start`
- Lint: `pnpm lint`
- Atualizar pnpm global: `pnpm add -g pnpm`
- Atualizar dependências (use com cautela): `pnpm update`

---

## 10) Solução de problemas

- "A porta 3000 está em uso":
  - Feche o processo que usa a porta ou use a porta alternativa sugerida pelo Next (ex.: 3001).
  - Para verificar a porta no Windows: `netstat -ano | findstr ":3000" | findstr LISTENING`
- PowerShell não aceita `&&` entre comandos:
  - No PowerShell, separe comandos por `;` ou use linhas separadas.
- Dependências quebradas / travadas:
  - Rode `pnpm install` novamente.
  - Apague a pasta `node_modules` e o arquivo `pnpm-lock.yaml` em último caso e reinstale (não recomendado se você já estiver em time).
- Erros de TypeScript/Lint em build:
  - O projeto está configurado para ignorar erros em build (`next.config.mjs`). Para checar manualmente, rode `pnpm lint`.
- Imagens não otimizadas:
  - O `images.unoptimized` está ativado no `next.config.mjs`. Se for usar otimização do Next Image, ajuste essa opção e os domínios permitidos.

---

## 11) FAQ rápido

- Como paro o servidor? → Pressione `Ctrl + C` no terminal.
- Onde troco o logo? → Substitua o arquivo em `public/cine-escola-logo.png` (ou ajuste o caminho no componente que o usa).
- Onde edito o menu? → `components/navbar.tsx`.
- Como adiciono uma nova página? → Crie uma pasta em `app/nova-pagina/` com um `page.tsx` dentro.
- Como mudo o tema padrão (claro/escuro)? → Em `components/theme-provider.tsx`.

---

## 12) Próximos passos sugeridos

- Traduzir completamente os textos da interface para PT-BR (páginas e componentes).
- Ajustar branding (cores, logos, tipografia) conforme sua identidade.
- Preparar deploy (ex.: Vercel) após validar em produção local.

---

Se quiser, posso aplicar as traduções e personalizações para você. É só dizer o que mudar (textos, cores, logos, itens de menu, etc.).

