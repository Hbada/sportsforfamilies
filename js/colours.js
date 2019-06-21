document.querySelectorAll("h5").forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    this.style.color = "green";
  });
});
