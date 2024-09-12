function findMinMax() {
  const input = document.getElementById("arrayInput").value;

  const array = input
    .split(",")
    .map((num) => num.trim())
    .map(Number);

  if (array.length === 0) {
    document.getElementById("result").textContent =
      "Please enter at least one number.";
    return;
  }

  const max = Math.max(...array);
  const min = Math.min(...array);

  const result = { max, min };

  document.getElementById(
    "result"
  ).textContent = `Max: ${result.max}, Min: ${result.min}`;
}
