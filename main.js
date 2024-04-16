let niz = [];

function prikaziPodatke() {
    // Promenio sam ime funkcije i uklonio event.preventDefault()
    let ime = document.getElementById('ime').value;
    let prezime = document.getElementById('prezime').value;
    let JMBG = document.getElementById('JMBG').value;
    let GodinaRodjenja = document.getElementById('godinaRodjenja').value; // Ispravljeno ime
    let MjestoRodjenja = document.getElementById('mjestoRodjenja').value; // Ispravljeno ime

    let osoba = {
        ime: ime,
        prezime: prezime,
        jmbg: JMBG,
        GodinaRodjenja: GodinaRodjenja,
        MjestoRodjenja: MjestoRodjenja
    }

    niz.push(osoba);
    console.log(niz);
    ispsisiSveOsobe();
}

function ispsisiSveOsobe() {
    let listaElement = document.getElementById('lista-osoba');
    listaElement.innerHTML = "";

    for (let i = 0; i < niz.length; i++) {
        let element = document.createElement('li');
        element.innerHTML = niz[i].ime + " " + niz[i].prezime + " " + niz[i].jmbg + " " + niz[i].GodinaRodjenja + " " + niz[i].MjestoRodjenja;
        console.log(element)
        listaElement.appendChild(element);
    }
}
