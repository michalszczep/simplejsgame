const history = [];

function losuj() {
   x = Math.random();
   
   if (x < 0.33) {
    return 'KAMIEN';
   } else if (x >= 0.33 && x < 0.66) {
    return 'PAPIER';
   } else {
    return 'NOZYCE';
   }
   
}

function obsluzWynik(naszWybor, wyborKompa) {
    let wynik;
    if ((naszWybor === 'KAMIEN' && wyborKompa == 'NOZYCE') || (naszWybor == 'PAPIER' && wyborKompa == 'KAMIEN') || (naszWybor == 'NOZYCE' && wyborKompa == 'PAPIER')) {
        wynik = 'Wygrales';
    } else if (
        (wyborKompa == 'KAMIEN' && naszWybor == 'NOZYCE') || (wyborKompa == 'PAPIER' && naszWybor == 'KAMIEN') || (wyborKompa == 'NOZYCE' && naszWybor == 'PAPIER')) {
        wynik = 'Przegrales'
    } else {
        wynik = 'Remis';
    } 
    history.push({wyborUzytkownika: naszWybor, wyborKomputera: wyborKompa, rezultat: wynik});
    refreshHistory(naszWybor, wyborKompa, wynik);
}

function refreshHistory(naszWybor, wyborKompa, wynik){
    historyElement = document.querySelector('#history');
    historyElement.innerHTML = '';
    historyPanelContent = '';
    for (let historyElement of history) {
        historyRecord = `Uzytkownik: ${historyElement.wyborUzytkownika} | Komputer: ${historyElement.wyborKomputera} | ${historyElement.rezultat}`;
        historyPanelContent = historyPanelContent + `<p>${historyRecord}</p>`;
    }
    historyElement.innerHTML = historyPanelContent;
}

function wybranyKamien() {
    naszWybor = 'KAMIEN';
    wyborKompa = losuj();
    obsluzWynik(naszWybor, wyborKompa);
}

function wybranyPapier() {
    naszWybor = 'PAPIER';
    wyborKompa = losuj();
    obsluzWynik(naszWybor, wyborKompa);
}

function wybraneNozyce() {
    naszWybor = 'NOZYCE';
    wyborKompa = losuj();
    obsluzWynik(naszWybor, wyborKompa);
}

document.querySelector('#kamien').addEventListener('click', wybranyKamien);
document.querySelector('#papier').addEventListener('click', wybranyPapier);
document.querySelector('#nozyce').addEventListener('click', wybraneNozyce);