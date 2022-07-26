
export function Nav(){

  return (
    <>
       <nav class="navbar extra-margin">
            <div class="logo">Mis Intereses</div>
            <input type="checkbox" id="menu-toggle" />
            <label for="menu-toggle" class="menu-button-container">
                <div class="menu-button"></div>
            </label>

            <ul class="menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="movies">Películas</a></li>
                <li><a href="series">Series</a></li>
                <li><a href="animes">Anime</a></li>
            </ul>

        </nav>
    </>
  )
}