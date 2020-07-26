
let carouselItems = document.querySelectorAll('.carousel-item')
let reqImage = 'happy'

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var textNeedCount = document.querySelectorAll('#input_text, #textarea2');
    M.CharacterCounter.init(textNeedCount);
    var elems1 = document.querySelectorAll('.carousel');
    var instances1 = M.Carousel.init(elems1);



});

const renderDream = (data, id, from) => {
    console.log('why is this runnin')
    let html = ` 
    <div class="card-panel dream white row" id=${id}>
    <div class="image-container">
    <img src="/images/${data.reqImage}.svg" alt="dream thumb">
    </div>
    <div class="dream-details">
        <div class="dream-title">${data.title}</div>
        <div class="dream-summary">${data.details}</div>
    </div>
    <div class="actions">
    <div class="dream-see">
    <i style="cursor:pointer;" class="material-icons zoom " data-id="${id}">zoom_in</i>
     </div>   
    <div class="dream-fav">
            <i style="cursor:pointer;" class="material-icons heart ${data.favorite ? 'fill-heart' : ''}" data-id="${id}">${data.favorite ? 'favorite' : 'favorite_outline'}</i>
        </div>
    
        <div class="dream-delete">
            <i style="cursor:pointer;" class="material-icons delete " data-id="${id}">delete_outline</i>
        </div>
       
    </div>
    <div class="dream-type ${data.reqImage}"></div>
</div>
 `
    if (from === 'favs') {
        favDreamsContainer.innerHTML += html
    }
    else {
        dreams.innerHTML += html
    }
}


let carouselItemsArr = [...carouselItems]
carouselItemsArr.forEach(item => item.addEventListener('click', e => setImage(e)))

const setImage = e => {

    carouselItemsArr.forEach(item => item.classList.remove('selected-image'))
    e.currentTarget.classList.add('selected-image')

    reqImage = e.currentTarget.children[1].textContent.toLowerCase()

}

const removeDream = id => {
    const dream = document.getElementById(`${id}`)
    dream.remove()
}

const setSelectedDream = async (id) => {
    let data
    await db.collection('dreams')
        .doc(id)
        .get()
        .then(res => {
            console.log(res.data())
            data = res.data()
        })
    localStorage.setItem('currentSelectedDream', JSON.stringify(data))
    window.location = '/pages/dreamExpand.html'
}