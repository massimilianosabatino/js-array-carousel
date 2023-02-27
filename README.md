# Carosello Mono Array

Consegna:  
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.  
---

## MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

## MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.  
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.  
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

## MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

## BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

## BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.  
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

Consigli del giorno:  
*
1. Costruiamo del carosello una versione statica contenente solamente un’immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in JS. Potremo quindi usarli come “template”.
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (starà a voi capire quale) rispondete a questa domanda: “Quanti cicli servono?”
*

//MILESTONE 1//  
//Creare una struttura HTML con un DIV container da centrare sulla pagina  
//Crare un DIV contenitore per le immagini e i bottoni e posizionarlo in maniera relativa  
//Creare all'interno un TAG IMG e due Tag per i due bottoni, i due bottoni avranno posizione absolute per essere piazzati sopra le immagini  
//Impostare una classe comune per le immagini per nasconderle e una per visualizzarle, così da poter attivare e disattivare la classe di switch  

//MILESTONE 2//  
//Creare un arrai contenente le 5 immagini da utilizzare  
//Tramite ciclo creare dinamicamente i 5 TAG IMG 
//Assegnare ad ogni TAG la classe di default per la visualizzazione  
//Creare una variabile per definire quale è l'immagine attiva in quel momento  
//Assegnare la classe di switch alla prima immagine utilizzando querySelector (che la applicherà solamente alla prima)  

//MILESTONE 3//
//Creare una variabile da riferimento per l'indice dell'array con le immagini ( 0) 
//Creare un evento in ascolto sul click del mouse associato alla freccia sotto  
//SE indice array è minore della lunghezza dell'array - 1 
  - clicco rimuove la classe switch  
  - Richiama la variabile collegata all'array e la aumento di uno  
  - Aggiunge la classe di switch  
//Creare un evento in ascolto sul click del mouse associato alla freccia sopra  
//SE indice array è minore della lunghezza dell'array - 1 
  - clicco rimuove la classe switch  
  - Richiama la variabile collegata all'array e la diminuisce di uno  
  - Aggiunge la classe di switch  

