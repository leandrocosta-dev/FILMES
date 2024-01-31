const background = document.getElementById('modal-background');
const modalContainer = document.getElementById('modal-container');

let currentMovie = {};

function addCurrentMovieToList() {
    if (isMovieAlreadOnList(currentMovie.imdbID)){
        notie.alert({
            type: 'error',
            text: 'Filme ja está na sua lista!'
        });
        return;
    }
    addToList(currentMovie);
    updateUI(currentMovie);
    updateLocalStorage()
    closeModal();
}

function backgroundClickHandler() {
    overlay.classList.remove('open');
}

function creatModal(data) {
    currentMovie = data;
    modalContainer.innerHTML = `
    <h2 id="movie-title">${data.Title} - ${data.Year}</h2>
                <section id="modal-body">
                    <img id="movie-poster"
                        src=${data.Poster}
                        alt="Poster do Filme">
                    <div id="movie-info">
                        <div id="movie-plot">
                            <h4>${data.Plot}</h4>
                        </div>
                        <div id="movie-cast">
                            <h4>Elenco</h4>
                            <h5>${data.Actors}</h5>
                        </div>
                        <div id="movie-genre">
                            <h4>Gênero</h4>
                            <h5 id="movie-genre">${data.Genre}</h5>
                        </div>
                    </div>
                </section>
                <section id="modal-footer">
                    <button id="add-to-list" onclick='{addCurrentMovieToList()}'>Adicionar à lista</button>
                </section>`;
}

function closeModal(){
    overlay.classList.remove('open');
}
background.addEventListener('click', backgroundClickHandler);