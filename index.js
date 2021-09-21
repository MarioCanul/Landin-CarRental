function myFunction() {
    var x = document.getElementById("myLinksNav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(function() { 
 
    
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            1000:{
                items:3
            }
        }
      })
      $('.arrouUp').click(function(e){ 
          e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    
    

  });