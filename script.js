let bowling = {
    players: [
        { name: 'Livio', scores: [] },
        { name: 'Paola', scores: [] },
        { name: 'Filippo', scores: [] },
        { name: 'Giuseppe', scores: [] }
    ],

    // 1. Crea 10 punteggi casuali per ogni giocatore
    creaPunteggi: function () {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].scores = []; // svuoto eventuali punteggi precedenti
            for (let j = 0; j < 10; j++) {
                let punteggio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                this.players[i].scores.push(punteggio);
            }
        }
        console.log("Punteggi generati per tutti i giocatori");
    },

    // 2. Calcola il punteggio finale di ogni giocatore e ordina in ordine decrescente
    calcolaPunteggiFinali: function () {
        for (let i = 0; i < this.players.length; i++) {
            let somma = 0;
            for (let j = 0; j < this.players[i].scores.length; j++) {
                somma = somma + this.players[i].scores[j];
            }
            this.players[i].punteggioFinale = somma;
        }

        // Ordino i giocatori dal punteggio più alto al più basso
        this.players.sort(function (a, b) {
            return b.punteggioFinale - a.punteggioFinale;
        });

        console.log("Punteggi finali calcolati e ordinati");
    },

    // 3. Aggiunge un nuovo giocatore e gli crea 10 punteggi casuali
    aggiungiGiocatore: function (nome) {
        let nuovoGiocatore = { name: nome, scores: [] };

        for (let i = 0; i < 10; i++) {
            let punteggio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            nuovoGiocatore.scores.push(punteggio);
        }

        this.players.push(nuovoGiocatore);
        console.log("Giocatore " + nome + " aggiunto con i suoi 10 punteggi");
    },

    // 4. Determina il vincitore
    determinaVincitore: function () {
        if (this.players.length === 0) {
            console.log("Non ci sono giocatori");
            return;
        }

        // Assicurandosi che i punteggi finali siano calcolati e ordinati
        this.calcolaPunteggiFinali();

        let vincitore = this.players[0];
        console.log("Il vincitore è " + vincitore.name + " con " + vincitore.punteggioFinale + " punti");
    },

    // EXTRA: Classifica finale
    classificaFinale: function () {
        this.calcolaPunteggiFinali();

        console.log("--- CLASSIFICA FINALE ---");
        for (let i = 0; i < this.players.length; i++) {
            console.log((i + 1) + "° " + this.players[i].name + " - " + this.players[i].punteggioFinale + " punti");
        }
    }
};

// ===== ESEMPI DI UTILIZZO =====

bowling.creaPunteggi();               // genera i 10 punteggi per i 4 giocatori
bowling.aggiungiGiocatore("Anna");    // aggiunge un nuovo giocatore
bowling.classificaFinale();           // mostra la classifica completa
bowling.determinaVincitore();         // dichiara il vincitore