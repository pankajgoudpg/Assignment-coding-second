function findUniqueNumbers() {
  const input = document.getElementById("numbersInput").value;
  const resultDiv = document.getElementById("result");

  const numbersArray = input.split(",").map((num) => num.trim());

  // Set to duplicates value
  const uniqueNumbers = new Set(numbersArray);

  const uniqueNumbersArray = Array.from(uniqueNumbers);
  const uniqueNumbersString = uniqueNumbersArray.join(", ");

  resultDiv.textContent = `Unique Numbers: ${uniqueNumbersString}`;
}
