const express = require('express');

// Créer l'application Express
const app = express();

// Port d'écoute
const PORT = 4000;


// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
