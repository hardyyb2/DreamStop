

const dreams = document.querySelector('.dreams')

dreams.addEventListener('click', evt => {
    console.log(evt.target.classList)
    if (evt.target.tagName === 'I' && evt.target.classList.contains('delete')) {
        const id = evt.target.getAttribute('data-id')
        db.collection('dreams').doc(id).delete()
    } else if (evt.target.tagName === 'I' && evt.target.classList.contains('heart')) {
        const id = evt.target.getAttribute('data-id')
        if (evt.target.classList.contains('fill-heart')) {
            db
                .collection('dreams')
                .doc(id)
                .set({
                    favorite: false
                }, {
                    merge: true
                })
            evt.target.classList.remove('fill-heart')
            evt.target.textContent = "favorite_outline"

        } else if (!evt.target.classList.contains('fill-heart')) {
            db
                .collection('dreams')
                .doc(id)
                .set({
                    favorite: true
                }, {
                    merge: true
                })
            evt.target.classList.add('fill-heart')
            evt.target.textContent = "favorite"
        }

    } else if (evt.target.tagName === 'I' && evt.target.classList.contains('zoom')) {
        setSelectedDream(evt.target.getAttribute('data-id'))
    }
})
