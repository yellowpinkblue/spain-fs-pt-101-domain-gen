import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['el', 'nuestro'];
  let adj = ['unico', 'bonito'];
  let noun = ['tiburon', 'mapache'];
  let final = ['.es', '.com']

// for(let i = 0; i < pronoun.length; i++){
//   for(let j = 0; j < adj.length; j++){
//     for(let k = 0; k < noun.length; k++){
//       console.log(pronoun[i]+adj[j]+noun[k]+'.com');
//     };
//   }
// }
pronoun.forEach((element1) => adj.forEach((element2) => noun.forEach((element3) => final.forEach((element4) => console.log(element1+element2+element3+element4)))));
};
