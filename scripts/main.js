function toggleTrans(x){
    x.classList.toggle('activated');
}; /**make the toggle turn X**/

$(document).ready(function(){
    $('#toggle').click(function(){
        $('.mobile-nav').toggleClass('mobile-nav-activated');
        $('.mobile-nav-links').fadeToggle(250);
    });
});/**make the navigation for mobile displays**/

$(".mobile-nav-links, a").click(function(){
    $('.mobile-nav-activated').toggleClass(150);       
});/**make the menu anchor links displays**/

$(window).on('scroll', function(){
    if($(window).scrollTop() > 300){
        $('#vertical-navigation').fadeIn(1500);
    }else{
        $('#vertical-navigation').fadeOut(500);
    }
});//make the vertical navigation appears  

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });/**smooth  scrolling**/









/**$(window).on('scroll', function(){
    if($(window).scrollTop() > 180){
        $('.mobile-navbar').addClass('mobile-navbar-activated');
    }else{
        $('.mobile-navbar').removeClass('mobile-navbar-activated');
    }
});/**make the mobile navbar displays when scroll down**/

