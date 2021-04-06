var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var colore = prompt('Scrivi il tuo colore preferito');
var risultato = nome + cognome + colore + '21';
document.getElementById('pass').innerHTML = "Questa è la tua password: " + risultato;