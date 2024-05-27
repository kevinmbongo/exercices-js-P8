// Créez votre fonction ici
function calculateAverage(notes) {
  let sum = 0;
  if (!notes) return "No numbers to calculate average";

  for (let i = 0; i < notes.length; i++) {
    sum += notes[i];
  }
  return sum / notes.length;
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
