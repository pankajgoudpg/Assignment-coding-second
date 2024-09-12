document.getElementById("countButton").addEventListener("click", function () {
  const text = document.getElementById("textInput").value;

  function countWords(text) {
    text = text.toLowerCase();

    const words = text.split(/\s+/);

    const wordCount = {};

    words.forEach((word) => {
      if (word) {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });

    return wordCount;
  }

  // Get the word count
  const wordCounts = countWords(text);

  // Create HTML for results
  let resultsHtml = "<h2>Word Counts:</h2><ul>";
  for (const [word, count] of Object.entries(wordCounts)) {
    resultsHtml += `<li><strong>${word}:</strong> ${count}</li>`;
  }
  resultsHtml += "</ul>";

  // Display the results
  document.getElementById("results").innerHTML = resultsHtml;
});
