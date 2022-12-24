

var allButtons = document.querySelectorAll('.items');


for (var i = 0;i < allButtons.length; i++) {
     allButtons[i].addEventListener('click', function (e) {

          const flavour = e.currentTarget.querySelector('h4').innerText;

          const imageURL = e.currentTarget.querySelector('img').src;

          const code = e.currentTarget.querySelector('img').getAttribute("alt");

          const popup = document.getElementsByClassName("popup");
          for (let i = 0; i < popup.length; i++) {
               popup[i].style.visibility = "visible";
               document.getElementById("cake_dis").style.opacity="0.2";
          }

          var close = document.querySelectorAll('.close');
          for (var i = 0; i < close.length; i++) {
               close[i].addEventListener('click', function (e) {
                    for (let i = 0; i < popup.length; i++) 
                    {
                         popup[i].style.visibility = "hidden";
                         location.reload();
                    }
               })
          }

          document.getElementById("pound").addEventListener("keypress",function(event)
          {
            if(event.key === "Enter")
            {
               document.getElementById("ok").click();
            }
          });


          document.getElementById("ok").addEventListener('click', function (e) 
          {
               var pound = document.getElementById("pound").value;
               document.getElementById("ok").style.display = "none";
               document.getElementById("pound").style.display = "none";
               document.getElementById("pop").innerText = pound + " pound is selected ";
               document.getElementById("hide_confirm").style.display = "block";

               var confirm = document.querySelectorAll('.confirm');
               
               for (var i = 0; i < confirm.length; i++) {
                    confirm[i].addEventListener('click', function (e) 
                    {
                         if (pound != null) {
   
                              var url = "https://wa.me/917980026215?text=" + "I want " + pound + " pound " + flavour + " (code : " + code+ ")" + encodeURIComponent(imageURL);
                              window.open(url).focus();
                         }
                         location.reload();

                    })
               }
          })

        
          // window.open(url,"_blank").focus();

     });
}

