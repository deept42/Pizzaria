document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  const toggleButton = document.createElement("button");
  const sunIcon = "☀️";
  const moonIcon = "🌙";
  toggleButton.innerHTML = sunIcon;
  toggleButton.id = "toggleButton";
  toggleButton.classList.add("toggle-button");
  container.appendChild(toggleButton);

  toggleButton.addEventListener("click", function() {
      const body = document.body;
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
          toggleButton.innerHTML = moonIcon;
      } else {
          toggleButton.innerHTML = sunIcon;
      }
  });
});

