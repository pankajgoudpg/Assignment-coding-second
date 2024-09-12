function swapValues() {
  const inputA = document.getElementById("inputA").value;
  const inputB = document.getElementById("inputB").value;

  if (isNaN(inputA) || isNaN(inputB)) {
    alert("Please enter valid numbers in both fields.");
    return;
  }

  let a = Number(inputA);
  let b = Number(inputB);

  [a, b] = [b, a];

  document.getElementById("result").textContent = `Swapped Values: ${a}, ${b}`;
}
