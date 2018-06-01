document.addEventListener('DOMContentLoaded', function(){
  var scrollLinks = [
    { link: '.blurb-scroll-link', scrollTo: '.services' },
    { link: '.services-link', scrollTo: '.services' },
    { link: '.work-link', scrollTo: '.work' },
    { link: '.contact-link', scrollTo: '.contact' }
  ]

  scrollLinks.forEach(function(scrollLink){
    document.querySelector(scrollLink.link).addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(scrollLink.scrollTo).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  })

  // var scrollButton = document.querySelector('.blurb-scroll-link');
  // var servicesLink = document.querySelector('.services-link');
  // var workLink = document.querySelector('.work-link');
  // var contactLink = document.querySelector('.contact-link');
  //
  // scrollButton.addEventListener('click', function(e){
  //   e.preventDefault();
  //   document.querySelector('.services').scrollIntoView({behavior: 'smooth'});
  // })
})
