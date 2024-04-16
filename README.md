![Logo](https://raw.githubusercontent.com/Brunogoniadis/Movie-biox-React-ts/ffa100b9ca4d5ee321909cc1e8f57ccec77ab7c7/src/assets/Logo.svg)

## Moviebiox

NodeTsMoviebiox é uma aplicação backend que alimenta um front que permite aos usuários pesquisarem e navegarem por filmes e programas de TV utilizando a API do Themoviedb. Neste repositório frontend, que faz parte de uma aplicação full-stack, os usuários podem pesquisar por título, gênero ou palavra-chave. Os resultados da pesquisa são exibidos em uma grade com pôsteres, títulos e avaliações.
 
O frontend está implantado em 
- [Movie-biox](https://movie-biox.vercel.app/)

## Tecnologias utilizadas

<div style="display: inline_block">
  <img align="center" alt="Node.js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Express.js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg">
  <img align="center" alt="TypeScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg">
  <img align="center" alt="Axios" height="30" width="40" src="https://axios-http.com/assets/logo.svg">
</div>

## Endpoints da API

### Filmes
- `GET /api/movie/:id`: Obter informações detalhadas sobre um filme por ID.
- `GET /api/moviesgenres`: Obter uma lista de gêneros de filmes.
- `GET /api/movies/category/:categoryId`: Obter filmes pertencentes a uma categoria ou gênero específico.
- `GET /api/movies/related/:movieId`: Obter filmes relacionados com base em um ID de filme.
- `GET /api/movies/search?term=<termo_de_pesquisa>`: Pesquisar filmes com base em um termo.

### Programas de TV
- `GET /api/tv/:id`: Obter informações detalhadas sobre um programa de TV por ID.
- `GET /api/tvgenres`: Obter uma lista de gêneros de programas de TV.
- `GET /api/tv/category/:genreId`: Obter programas de TV pertencentes a uma categoria ou gênero específico.
- `GET /api/tv/related/:tvShowId`: Obter programas de TV relacionados com base em um ID de programa de TV.
- `GET /api/tvshows/search?term=<termo_de_pesquisa>`: Pesquisar programas de TV com base em um termo.

## Tecnologias Utilizadas
- Node.js
- TypeScript
- Express.js
- Axios


## Autores

- [@brunogoniadis](https://www.github.com/Brunogoniadis)


## Instalação

Para instalar e testar localmente 

```bash
  git clone https://github.com/Brunogoniadis/node-ts-moviebiox/
  cd node-ts-moviebiox
  yarn install || npm instalar
  yarn start || npm start
```
