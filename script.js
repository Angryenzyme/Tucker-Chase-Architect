// Placeholder JS file — we'll expand this later!

// Example: Alert when someone clicks a project link
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', function () {
    console.log(`Navigating to: ${this.textContent}`);
  });
});
