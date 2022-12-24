


window.addEventListener("load", function (event) {

     const offer = document.getElementsByClassName("offer_poster");
     for (let i = 0; i < offer.length; i++) {
          offer[i].style.visibility = "visible";
          document.getElementById("body").style.opacity = "0.2";
          const nav = document.getElementsByClassName("nav");
          for (let j = 0; j < nav.length; j++) {
               nav[j].style.opacity = "0.2";
          }
     }

     var close_offer = document.querySelectorAll('.close_offer');
     for (var i = 0; i < close_offer.length; i++) {
          close_offer[i].addEventListener('click', function (e) {
               for (let i = 0; i < offer.length; i++) {
                    offer[i].style.visibility = "hidden";
                    document.getElementById("body").style.opacity = "1";
                    const nav = document.getElementsByClassName("nav");
                    for (let j = 0; j < nav.length; j++) {
                         nav[j].style.opacity = "1";
                    }
               }
          })
     }


     function first() {
          document.getElementById("video").setAttribute("src", "images2/slider2.mp4");
     }
     function second() {
          document.getElementById("video").setAttribute("src", "images2/slider3.mp4");
     }
     function third() {
          document.getElementById("video").setAttribute("src", "images2/slider4.mp4");
     }
     function fourth() {
          document.getElementById("video").setAttribute("src", "images2/slider1.mp4");
     }
     setInterval(first, 3000);
     setInterval(second, 6000);
     setInterval(third, 9000);
     setInterval(fourth, 12000);
});
