const suggestions = document.getElementById("suggestions");

// Simulate suggestions that will come over WebSocket
setInterval(() => {
    const message = "Medication for depression";
    suggestions.innerHTML =
      `<li>${message}</li>` +
      suggestions.innerHTML;
  }, 5000);