# App MovieList

## Descrição
Este é um projeto destinado a todos os amantes de cinema que desejam manter uma lista organizada de filmes que querem assistir. Com o MovieList Tracker, você nunca mais vai esquecer o nome de um filme que alguém recomendou ou que você descobriu enquanto navegava pela internet. Leve sua lista de filmes favoritos para qualquer lugar e mantenha-a sempre atualizada!

## Funcionalidades
- **Adicionar Filmes:** Facilmente adicione novos filmes à sua lista.
- **Visualizar Lista:** Veja todos os filmes que você adicionou em uma interface limpa e organizada.
- **Marcar como Assistido:** Marque filmes que você já assistiu.
- **Remover Filmes:** Remova filmes da lista quando desejar.

## Tecnologias Utilizadas
- **HTML:** Estrutura da página web.
- **CSS:** Estilização para tornar a interface visualmente agradável.
- **JavaScript:** Funcionalidades interativas para adicionar, remover e marcar filmes como assistidos.

## Como Executar
Para acessar e usar o MovieList Tracker, siga os passos abaixo:


## API OMDb

#### REFERENCIA: https://www.omdbapi.com/
#
## Exemplo de requisição

```http
  GET http://www.omdbapi.com/?apikey=[yourkey]&t=godfather&y=1972

```
#### Retorna todos os itens em formato JSON

```http
  GET {"Title":"The Godfather","Year":"1972","Rated":"R","Released":"24 Mar 1972","Runtime":"175 min","Genre":"Crime, Drama","Director":"Francis Ford Coppola","Writer":"Mario Puzo, Francis Ford Coppola","Actors":"Marlon Brando, Al Pacino, James Caan","Plot":"Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.","Language":"English, Italian, Latin","Country":"United States","Awards":"Won 3 Oscars. 31 wins & 31 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.2/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"100/100"}],"Metascore":"100","imdbRating":"9.2","imdbVotes":"1,979,342","imdbID":"tt0068646","Type":"movie","DVD":"01 Aug 2013","BoxOffice":"$136,381,073","Production":"N/A","Website":"N/A","Response":"True"}


```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do filme que você quer |


## notie.js

#### REFERENCIA: [https://www.omdbapi.com/](https://github.com/jaredreich/notie)
Para as notificações utilizei os recursos da biblioteca notie.js para tornar mais fluido e melhor apresentavel ao usuário.
#
## Funcionalidades

- Pesquisa por títulos de filmes
- Salva a referencia do filme escolhido
- Deleta a referencia do Filme Escolhido
- Salva os dados da lista de filmes.

### Para maiores detalhes, estou a disposição!

1. Clone o repositório:
```bash
git clone https://github.com/leandrocosta-dev/FILMES
