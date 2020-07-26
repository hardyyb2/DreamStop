
//add recipe
const form = document.querySelector('form')

const submitButton = document.querySelector('#submitbutton')

submitButton.addEventListener('click', evt => {
    let title

    console.log('ciejd')
    evt.preventDefault()
    const dream = {
        title: form.title.value,
        details: form.details.value,
        reqImage: reqImage
    }

    db.collection('dreams').add(dream)
        .then(() => window.location.replace('/'))
        .catch(err => {
            console.log(err)
        })

    form.title.value = ''
    form.details.value = ''
})

