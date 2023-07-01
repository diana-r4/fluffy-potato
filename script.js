/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
var spanishWord =[{english:"Apple",spanish:"Manzana"},
                  {english:"Red",spanish:"Rojo"},
                  {english:"Carrot",spanish:"Zanahoria"},
                  {english:"Orange",spanish:"Naranja"},
                  {english:"Cheese",spanish:"Queso"},
                  {english:"Yellow",spanish:"Amarillo"},
                  {english:"Frog",spanish:"Sapo"},
                  {english:"Green",spanish:"Verde"},
                  {english:"Water",spanish:"Agua"},
                  {english:"Blue",spanish:"Azul"},
                  {english:"Grapes",spanish:"Uvas"},
                  {english:"Purple",spanish:"Morado"},
                  {english:"Pig",spanish:"Cerdo"},
                  {english:"Pink",spanish:"Rosa"},
                  {english:"Bat",spanish:"Murcielago"},
                  {english:"Black",spanish:"Negro"},
                  {english:"Egg",spanish:"Huevo"},
                  {english:"White",spanish:"Blanco"},
                  {english:"Bear",spanish:"Oso"},
                  {english:"Brown",spanish:"Cafe"},
                  {english:"Elephant",spanish:"Elefante"},
                  {english:"Gray",spanish:"Gris"},
                  {english:"Ice Cream",spanish:"Helado"},
                  {english:"Cookie",spanish:"Galleta"},
                  {english:"Cake",spanish:"Pastel"}]

var words
function showAnswer() {
document.getElementById("flash-card").innerHTML = words.spanish
  
}

function newCard() {
words=spanishWord[Math.floor(Math.random() * spanishWord.length)]
document.getElementById("flash-card").innerHTML = words.english
}