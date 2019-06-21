document.querySelectorAll("h5").forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    this.style.color = "green";
  });
});

// load photos when hovering over cards

// create hockey image variable
//var hockeyImg = document.createElement("img");
//hockeyImg.setAttribute("src", "images/hockey.png");
//hockeyImg.setAttribute("width", "1024");
//hockeyImg.setAttribute("alt", "illustrated hockey stick");

// on hover, insert the photo

const hockeyCard = document.querySelector('#card-hockey');
hockeyCard.onmouseover = hockeyMouseOver;

function hockeyMouseOver() {
  document.getElementById("image-pane").appendChild(<img src="./images/hockey.png" />);
};

// document.getElementById("image-pane").appendChild("hockeyImg");
