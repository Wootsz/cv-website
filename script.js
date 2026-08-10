// script.js - small helpers for smooth scrolling and active link
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Optional: highlight nav link for the section in view
  var sections = document.querySelectorAll('main section');
  var navLinks = document.querySelectorAll('nav a');

  function onScroll(){
    var fromTop = window.scrollY + 120; // offset for header
    sections.forEach(function(section){
      if(section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop){
        var id = section.getAttribute('id');
        navLinks.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href') === '#'+id); });
      }
    });
  }

  document.querySelector('.content').addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  onScroll();
});
