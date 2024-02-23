function nav_open() {

    document.getElementById("responsiveNav").style.width = "90%";
  
  }
  
  
  
  function nav_close() {
    document.getElementById("responsiveNav").style.width = "0";
  }
  
  
  
  // Hide Menu when Click the Links
  
  var wd = screen.width;
  var awd = screen.availWidth;
  if(wd<991)
  
  {
  
      document.querySelectorAll("#click").forEach((link) => {
  
          link.addEventListener("click", () => {
            document.getElementById("responsiveNav").style.width = "0";
  
          });
  
      });
  
  }


  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });




  // sticky header
  window.onscroll = function() {
    myFunction();
  }
  
  var header = document.getElementById("myHeader");
  
  var sticky = header.offsetTop;
  
  
  
  function myFunction() {
  
    if (window.pageYOffset > sticky) {
  
        header.classList.add("sticky");
  
    } else {
  
        header.classList.remove("sticky");
  
    }
  
  }


// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);