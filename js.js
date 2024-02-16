$(document).ready(function() {
    $(".slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 700,
    responsive: [
    {
    breakpoint: 768,
    settings: {
    slidesToShow: 2
    }
    },
    {
    breakpoint: 550,
    settings: {
    slidesToShow: 1
    }
    }
    ]
    });
  });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let accordion = document.querySelector(".accordion");

accordion.addEventListener("click", whiteColor);
function whiteColor(){
    accordion.style.color = "#FFFFFF";
}

accordion.addEventListener("mouseout",function(){
    accordion.style.color = "black";
    draccordioniv.style.transition = "1s";
})
