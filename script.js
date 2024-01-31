const searchButton = document.getElementById('search-button');
const overlay = document.getElementById('modal-overlay');
const movieName = document.getElementById('movie-name');
const movieYear = document.getElementById('movie-year');
const movieListContainer = document.getElementById('movie-list');

let movieList = JSON.parse(localStorage.getItem("movieList")) ?? [];

async function searchButtonClickHandler() {
    try {
        let url = `http://www.omdbapi.com/?apikey=${key}&t=${movieNameParameterGenerator()}${movieYearParameterGenerator()}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Error) {
            throw new Error('Filme não encontrado! Pesquise em Inglês!')
        }
        creatModal(data);
        overlay.classList.add('open');
    } catch (error) {
        notie.alert({
            type: 'error',
            text: error.message
        });
    }
}

function movieNameParameterGenerator() {
    if (movieName.value === '') {
        throw new Error('Digite o Nome do Filme');
    }
    return movieName.value.split(' ').join('+');
}

function movieYearParameterGenerator() {
    if (movieYear.value === '') {
        return ""
    }
    if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
        throw new Error('Ano do filme inválido!');
    }
    return `&y=${movieYear.value}`;
}

function addToList(movieObject) {
    movieList.push(movieObject);
}

function isMovieAlreadOnList(id) {
    function idOnList(movieObject) {
        return movieObject.imdbID === id;
    }
    return Boolean(movieList.find(idOnList));
}

function updateUI(movieObject) {
    movieListContainer.innerHTML += `<article id='movie-card-${movieObject.imdbID}'>
        <img 
            src="${movieObject.Poster}" 
            alt="Poster do  filme ${movieObject.Title}"/>
            <button class="remove-button" onclick="{removeFilmFromList('${movieObject.imdbID}')}"}>
            <i class="bi bi-trash" </i>Remover</i>
            </button>
        </article>`;
}

function removeFilmFromList(id) {
    notie.confirm({
        text: 'Deseja excluir o filme da sua lista?',
        submitText: "SIM",
        cancelText: "NÃO",
        position: "top",
        submitCallback: function remove() {
            movieList = movieList.filter(movie => movie.imdbID !== id);
            document.getElementById(`movie-card-${id}`).remove();
            updateLocalStorage()
        },
    });

}

function updateLocalStorage() {
    localStorage.setItem('movieList', JSON.stringify(movieList));
}

for (const movieInfo of movieList) {
    updateUI(movieInfo);
}
searchButton.addEventListener('click', searchButtonClickHandler);