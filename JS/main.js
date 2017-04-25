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

$('.main-carousel').flickity({
  // options
  autoPlay: 1500,
  pauseAutoPlayOnHover: true,
  cellAlign: 'left',
  contain: true
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