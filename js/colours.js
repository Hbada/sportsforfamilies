document.querySelectorAll("h5").forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    this.style.color = "green";
  });
});

// load photos when hovering over cards

var hockeyImg = document.createElement("img");
elem.setAttribute("src", "images/hockey.png");
elem.setAttribute("width", "1024");
elem.setAttribute("alt", "illustrated hockey stick");
document.getElementById("card-hockey").appendChild("hockeyImg");
