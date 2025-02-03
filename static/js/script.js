let quiz = [
    {
        "ndomanda": "1",
        "domanda": "In quale città è ambientato il primo Assassin’s Creed?",
        "risGiusta": "gerusalemme",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.uov8DimxaK3_S9wCjT-ZkgHaEJ?w=323&h=180&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "Il primo gioco è ambientato durante la Terza Crociata, e Gerusalemme è una delle città principali esplorabili insieme a Damasco e Acri.",
    },
    {
        "ndomanda": "2",
        "domanda": "Qual è il nome del protagonista di Assassin’s Creed II?",
        "risGiusta": "ezio",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.FpKYMs4-6vI6renlalmULAHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "Assassin’s Creed II segue la storia di Ezio Auditore da Firenze, uno degli Assassini più amati della serie",
    },
    {
        "ndomanda": "3",
        "domanda": "Quale ordine segreto combattono gli Assassini?",
        "risGiusta": "templari",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.DvIU77XT0Q7cdTsaAfWmNwHaEK?rs=1&pid=ImgDetMain",
        "spiegazione": "Gli Assassini lottano contro i Templari, che cercano di controllare l’umanità attraverso il potere e la tecnologia.",
    },
    {
        "ndomanda": "4",
        "domanda": "Come si chiama l'azienda che utilizza l'Animus?",
        "risGiusta": "abstergo",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.Kf8r-eoQJkrH2GaIuWB-zAHaDt?w=307&h=175&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "L'Abstergo Industries è una società moderna controllata dai Templari che utilizza l’Animus per esplorare i ricordi genetici.",
    },
    {
        "ndomanda": "5",
        "domanda": "In quale gioco appare per la prima volta il personaggio di Bayek?",
        "risGiusta": "origins",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.8w0Ur0CqRhSu0LvmbGYDLgHaFC?w=271&h=185&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "Assassin’s Creed Origins racconta la storia di Bayek di Siwa, uno degli ultimi Medjay, e le origini della Confraternita degli Assassini nell’Antico Egitto.",
    },
    {
        "ndomanda": "6",
        "domanda": "Quale arma nascosta è iconica nella saga?",
        "risGiusta": "lama",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP._vGTTIbw-1NvENEppnIQgwHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "La Lama Celata è l'arma simbolo degli Assassini, utilizzata per uccidere bersagli in modo discreto fin dal primo gioco.",
    },
    {
        "ndomanda": "7",
        "domanda": "Come si chiama il figlio di Edward Kenway?",
        "risGiusta": "haytham",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.kbtgSExr0J5YfJEXuPFHFwHaKQ?w=199&h=276&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "Haytham Kenway è il figlio di Edward Kenway e, in un colpo di scena, diventa un Gran Maestro Templare invece che un Assassino.",
    },
    {
        "ndomanda": "8",
        "domanda": "In quale gioco il protagonista è un pirata?",
        "risGiusta": "black Flag",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.yTX0HYhpbZOtg60aNPvfKwHaEK?w=238&h=180&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "Assassin’s Creed IV: Black Flag segue la storia di Edward Kenway, un pirata che diventa Assassino durante l'Età d'Oro della Pirateria.",
    },
    {
        "ndomanda": "9",
        "domanda": "Quale Assassino è interpretato da Michael Fassbender nel film?",
        "risGiusta": "aguilar",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.SAd73O4pHVpfx0NqljtaDgHaL1?w=197&h=316&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "Nel film Assassin’s Creed (2016), Michael Fassbender interpreta Aguilar de Nerha, un Assassino spagnolo del XV secolo.",
    },
    {
        "ndomanda": "10",
        "domanda": "Quale civiltà antica ha creato i Frutti dell’Eden?",
        "risGiusta": "isu",
        "risUtente": "",
        "linkimg": "https://th.bing.com/th/id/OIP.k17byJQwrMS2FyPezdicNgHaEK?w=284&h=180&c=7&r=0&o=5&pid=1.7",
        "spiegazione": "Gli Isu sono un'antica civiltà avanzata che ha creato i Frutti dell’Eden, potenti artefatti utilizzati per controllare l’umanità.",
    },
]

function sanitize(sanitize) {
    return sanitize.trim().toLowerCase();
}

function calcolaPunti(json) {
    let punteggio = 0
    let punthtml = document.querySelector("#punteggio")
    let fine = document.querySelector("#fine")
    let divDomande = document.querySelector("#divDomande")
    let testoLivello = document.querySelector("#testoLivello")
    let imgLiv = document.querySelector("#imgLivello")

    for (let i = 0; i < 10; i++) {
        let json = quiz[i];
        if (json["risGiusta"] == json["risUtente"]) {
            punteggio += 1;
        }
    }
    if (punteggio < 3) {
        testoLivello.innerHTML = "Il tuo livello è: <br>Recluta"
        imgLiv.setAttribute('src', "static/image/recluta.png");
    } else if (punteggio < 6) {
        testoLivello.innerHTML = "Il tuo livello è: <br>Iniziato"
        imgLiv.setAttribute('src', "static/image/Iniziato.png");
    } else if (punteggio < 9) {
        testoLivello.innerHTML = "Il tuo livello è: <br>Maestro"
        imgLiv.setAttribute('src', "static/image/ezio.png");
    } else {
        testoLivello.innerHTML = "Il tuo livello è: <br>Gran maestro"
        imgLiv.setAttribute('src', "static/image/Granmaestro.png");
    }
    punthtml.innerHTML = punteggio
    fine.classList.remove("hide")
    divDomande.classList.add("hide")
}
function capitalizeFirstLetter(string) {
    if (string.length === 0) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}


window.addEventListener("load", function () {
    let currentQuestion = 0;
    let numdomanda = document.querySelector("#ndomanda");
    let domande = document.querySelector("#domanda");
    let divSpiegazione = document.querySelector("#divSpiegazione")
    let json = quiz[currentQuestion];
    let body = document.querySelector("body")
    let bottone = document.querySelector("#bottone")
    let imgHtml = document.querySelector("#imgRis")
    let risHtml = document.querySelector("#risGiusta")
    let spiegazione = document.querySelector("#spiegazione")
    let risposta = true
    let livello = document.querySelector("#livello")
    numdomanda.innerHTML = "Domanda n." + json["ndomanda"]
    domande.innerHTML = json["domanda"]
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault()
        let risUtente = document.querySelector("[name=answer]")

        if (!risposta) {
            currentQuestion += 1
            body.classList.remove("overlayVerde", "overlayRosso");
            divSpiegazione.classList.add("hide")
            if (currentQuestion > 9) {
                calcolaPunti(json)
                livello.classList.remove("hide")
                divSpiegazione.classList.add("hide")
            } else {
                risUtente.classList.remove("hide")
                console.log("ciao")
                json = quiz[currentQuestion];
                numdomanda.innerHTML = "Domanda n." + json["ndomanda"]
                domande.innerHTML = json["domanda"]
                spiegazione.innerHTML = ""
                imgHtml.setAttribute('src', "");
                risHtml.innerHTML = ""
                bottone.value = "Rispondi"
                risposta = true
            }
        } else {
            risUtente.classList.add("hide")
            livello.classList.add("hide")
            divSpiegazione.classList.remove("hide")
            json["risUtente"] = sanitize(risUtente.value)
            if (json["risUtente"] == json["risGiusta"]) {
                body.classList.add("overlayVerde")
            } else {
                body.classList.add("overlayRosso")
            }
            spiegazione.innerHTML = json["spiegazione"]
            imgHtml.setAttribute('src', json["linkimg"]);
            risHtml.innerHTML = "La risposta giusta è:<br>" + capitalizeFirstLetter(json["risGiusta"]);
            bottone.value = "Vai avanti"
            risUtente.value = "";
            risposta = false
        }

    })
})