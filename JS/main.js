$(function(){

//SMOOTH SCROLLING
                   
       $(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});



//FLICKITY SLIDER

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});




//FORM SUBMITTING THINGER

$("#signup").submit(function(event){
   event.preventDefault();
  if ($("#email").val()==''){
    alert("Please submit a valid e-mail address");
  }else{
      alert("Thanks for subscribing!");
    }
}
);

});