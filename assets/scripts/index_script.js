document.getElementById('releases_close').addEventListener('click', function() {
    
    event.preventDefault();
    var block = document.getElementById('release_slide');

    block.classList.remove('slide-in');
    block.classList.add('slide-out');
  
    block.addEventListener('animationend', function() {
      block.style.display = 'none';
    });
  });
  

document.getElementById('releases').addEventListener('click', function(event) {
    event.preventDefault();
  
    var block = document.getElementById('release_slide');

    block.style.display = 'block';
    block.classList.remove('slide-out');
    block.classList.add('slide-in');

    block.addEventListener('animationend', function() {
        block.style.display = 'block';
      });
  });
  
  document.getElementById('project_close').addEventListener('click', function() {
    
    event.preventDefault();
    var block = document.getElementById('project_side');

    block.classList.remove('slide-in');
    block.classList.add('slide-out');
  
    block.addEventListener('animationend', function() {
      block.style.display = 'none';
    });
  });
  

document.getElementById('projects').addEventListener('click', function(event) {
    event.preventDefault();
  
    var block = document.getElementById('project_side');

    block.style.display = 'block';
    block.classList.remove('slide-out');
    block.classList.add('slide-in');

    block.addEventListener('animationend', function() {
        block.style.display = 'block';
      });
  });
  
  document.getElementById('about_close').addEventListener('click', function() {
    
    event.preventDefault();
    var block = document.getElementById('about_slide');

    block.classList.remove('slide-in');
    block.classList.add('slide-out');
  
    block.addEventListener('animationend', function() {
      block.style.display = 'none';
    });
  });
  

document.getElementById('about').addEventListener('click', function(event) {
    event.preventDefault();
  
    var block = document.getElementById('about_slide');

    block.style.display = 'block';
    block.classList.remove('slide-out');
    block.classList.add('slide-in');

    block.addEventListener('animationend', function() {
        block.style.display = 'block';
      });
  });
  