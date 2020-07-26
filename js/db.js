db
    .collection('dreams')
    .onSnapshot(snapshot => {
        let favsInLocal = []

        snapshot.docChanges().forEach(change => {
            if (change.doc.data().favorite) {
                favsInLocal.push({ id: change.doc.id, ...change.doc.data() })
            }
            if (change.type === 'added') {
                renderDream(change.doc.data(), change.doc.id)
            }
            if (change.type === 'removed') {
                removeDream(change.doc.id)
            }
        })
        localStorage.setItem('dreamFavs', JSON.stringify(favsInLocal))

    })
