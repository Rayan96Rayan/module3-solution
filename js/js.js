document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const content = document.getElementById("content");
  
    toggleButton.addEventListener("click", function() {
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
  