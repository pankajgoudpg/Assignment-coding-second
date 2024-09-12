function extractElements() {
  const input = document.getElementById("arrayInput").value;

  const array = input
    .split(",")
    .map((num) => num.trim())
    .map(Number);

  if (array.length < 2) {
    document.getElementById("result").textContent =
      "Please enter at least two numbers.";
    return;
  }

  const [first, second, ...rest] = array;
  const last = rest.pop();

  const resultArray = [first, second, last];

  document.getElementById(
    "result"
  ).textContent = `Extracted Elements: ${resultArray.join(", ")}`;
}
