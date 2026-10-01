let rubrica = {
    contacts: [
        { nome: 'Nicola', telefono: '3331111111' },
        { nome: 'Lorenzo', telefono: '3332222222' },
        { nome: 'Paola', telefono: '3333333333' },
        { nome: 'Jenny', telefono: '3334444444' }
    ],

    // 1. Mostra tutti i contatti
    mostraTutti: function () {
        console.log("--- Tutti i contatti ---");
        for (let i = 0; i < this.contacts.length; i++) {
            console.log((i + 1) + ". " + this.contacts[i].nome + " - " + this.contacts[i].telefono);
        }
    },

    // 2. Mostra un singolo contatto (cercando per nome)
    mostraContatto: function (nomeCercato) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].nome === nomeCercato) {
                console.log("Contatto trovato: " + this.contacts[i].nome + " - " + this.contacts[i].telefono);
                return;
            }
        }
        console.log("Contatto non trovato");
    },

    // 3. Elimina un contatto (cercando per nome)
    eliminaContatto: function (nomeDaEliminare) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].nome === nomeDaEliminare) {
                this.contacts.splice(i, 1);
                console.log("Contatto eliminato: " + nomeDaEliminare);
                return;
            }
        }
        console.log("Contatto non trovato, impossibile eliminare");
    },

    // 4. Aggiunge un nuovo contatto
    aggiungiContatto: function (nome, telefono) {
        this.contacts.push({ nome: nome, telefono: telefono });
        console.log("Contatto aggiunto: " + nome + " - " + telefono);
    },

    // EXTRA: Modifica un contatto esistente
    modificaContatto: function (nomeVecchio, nuovoNome, nuovoTelefono) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].nome === nomeVecchio) {
                this.contacts[i].nome = nuovoNome;
                this.contacts[i].telefono = nuovoTelefono;
                console.log("Contatto modificato con successo");
                return;
            }
        }
        console.log("Contatto non trovato, impossibile modificare");
    }
};

// ===== ESEMPI DI UTILIZZO =====

rubrica.mostraTutti();

console.log("-----");

rubrica.mostraContatto("Paola");

console.log("-----");

rubrica.aggiungiContatto("Marco", "3335555555");
rubrica.mostraTutti();

console.log("-----");

rubrica.eliminaContatto("Lorenzo");
rubrica.mostraTutti();

console.log("-----");

rubrica.modificaContatto("Jenny", "Jennifer", "3339999999");
rubrica.mostraTutti();