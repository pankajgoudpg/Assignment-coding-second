function extractProperties() {
  const person = {
    name: "Pankaj Goud",
    age: 28,
    address: {
      street: "C3, Block A, Vridhawan Colony",
      city: "Indore",
      state: "Madhya Pradesh",
    },
  };

  const {
    name,
    address: { street },
  } = person;

  const result = { name, street };

  document.getElementById(
    "result"
  ).textContent = `Name: ${result.name}, Street: ${result.street}`;
}
