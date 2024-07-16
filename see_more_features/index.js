function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  }
  return text;
}

// Example usage:
let longText = "This is a very long text that needs to be truncated.";
let truncatedText = truncate(longText, 30);
console.log(truncatedText); // Output: "This is a very lo..."
