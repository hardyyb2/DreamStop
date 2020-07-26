const favDreamsContainer = document.querySelector('.fav-dreams')

if (JSON.parse(localStorage.getItem('dreamFavs')) !== null) {
    let favDreams = JSON.parse(localStorage.getItem('dreamFavs'))
    console.log(favDreams)

    for (let i = 0; i < favDreams.length; i++) {
        let id = favDreams[i].id
        delete favDreams[i].id
        renderDream(favDreams[i], id, 'favs')
    }

}