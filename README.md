# Bibi Website

Meu portfólio pessoal como estudante de Análise e Desenvolvimento de Sistemas (ADS).
Reúne um pouco sobre mim, minhas certificações (com link de verificação), projetos e formação.

## Tecnologias

- React 18 (Create React App)
- Tailwind CSS
- Framer Motion (animações)
- Lenis (scroll suave)
- Lucide React (ícones)

## Como rodar

```bash
npm install
npm start
```

O site abre em http://localhost:3000.

Para gerar a versão de produção:

```bash
npm run build
```

## Publicar no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente o site
no GitHub Pages a cada push para a branch `main` (ou manualmente pela aba
Actions). Em **Settings → Pages**, selecione **GitHub Actions** como fonte de
deploy. O build usa caminhos relativos, então funciona tanto em um domínio
próprio quanto em um endereço de projeto (`usuario.github.io/nome-do-repo`).

## Estrutura

```
public/            index.html, favicon e currículo (PDF)
src/
  assets/          ilustrações e emblemas
  components/      seções do site (Hero, SobreMim, Certificacoes...)
  data/content.js  textos, certificados, projetos e links
  utils/           animações e rolagem
```

## Como atualizar o conteúdo

Certificados, projetos, formação e redes sociais ficam em `src/data/content.js`.
Para adicionar um projeto, inclua um objeto no array `projects`:

```js
{
  id: "meu-projeto",
  name: "Meu projeto",
  description: "O que ele faz",
  year: "2026",
  tags: ["Python"],
  githubUrl: "https://github.com/usuario/repositorio",
}
```
