let persona = {
    nome: "Luca",
    cognome: "Rossi",
    eta: 28,

    presentati: function() {
        console.log("Ciao, sono " + this.nome + " " + this.cognome + " ed ho " + this.eta + " anni");
    }
};

// Chiamo il metodo per vedere l'output
persona.presentati();