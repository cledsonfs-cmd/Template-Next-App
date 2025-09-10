# Template Next App

Modelo base para desenvolvimento front-end com Next.js (bootstrapped com create-next-app), usando TypeScript e Tailwind CSS.

---

##  Tecnologias

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- Configurações úteis: `.eslintrc`, `postcss.config.js`, `tailwind.config.js`
- Gerenciamento de pacotes via **Yarn** ou **npm** (`package.json`, `yarn.lock`, `package-lock.json`)

---

##  Estrutura do Projeto

```text
.
├── .yarn/
├── public/
│   └── logo_next.png
├── src/ ou pages/ (de acordo com configuração padrão)
├── .env.local
├── .eslintrc
├── .gitignore
├── README.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── yarn.lock ou package-lock.json
└── consulta.txt (opcional)
```

---

##  Primeiros Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/cledsonfs-cmd/Template-Next-App.git
   cd Template-Next-App
   ```

2. Instale as dependências:
   ```bash
   yarn
   # ou
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn run dev
   # ou
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

##  Estrutura e Páginas

- Edite a página padrão em `pages/index.js` (ou `.tsx`, conforme uso de TypeScript) para começar.
- Rotas API podem ser testadas em `pages/api/hello.js`.

---

##  Aprenda Mais

- Documentação oficial do **Next.js**: [Next.js Documentation](https://nextjs.org).
- Tutorial interativo: [Learn Next.js](https://nextjs.org/learn).
- Deploy facilitado com **Vercel**, plataforma oficial do Next.js.

---

##  Licença

Este projeto atualmente **não possui licença definida**. Recomendamos adicionar uma (por exemplo, MIT) conforme apropriado.

---

##  Observação

Use este template como base para novos projetos Next.js com TypeScript e Tailwind CSS. Sinta-se à vontade para customizá-lo, adicionar integração com testes, CI/CD, estilos globais, ou outras ferramentas conforme suas necessidades!
