//votre code ici
function pairNumbers(min, max) {
  let result = [];
  let i = min;

  while (i <= max) {
    if (i % 2 === 0) {
      result.push(i);
    }
    i++;
  }

  return result.join(",");
}
console.log(pairNumbers(1, 10));
export default pairNumbers;
