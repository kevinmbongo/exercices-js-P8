function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value;

  if (!isNaN(decimalInput)) {
    const decimalNumber = parseInt(decimalInput);

    if (decimalNumber >= 0) {
      let binary = "";
      let quotient = decimalNumber;

      while (quotient > 0) {
        const reste = quotient % 2;
        binary = reste + binary;
        quotient = Math.floor(quotient / 2);
        console.log(quotient);
      }

      document.getElementById(
        "binaryResult"
      ).textContent = `Le nombre binaire de ${decimalNumber} est ${binary}.`;
    } else {
      alert("Veuillez saisir un nombre entier positif.");
    }
  } else {
    alert("Veuillez saisir un nombre valide.");
  }
}
