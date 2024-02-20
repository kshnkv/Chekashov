const el = document.getElementById('scroll-container');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    el.addEventListener('mousedown', (e) => {
      isDown = true;
      el.classList.add('active');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });
  
    el.addEventListener('mouseleave', () => {
      isDown = false;
    });
  
    el.addEventListener('mouseup', () => {
      isDown = false;
    });
  
    el.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX); 
      el.scrollLeft = scrollLeft - walk;
    });

    function scrollToStart(elementId) {
    
      var element = document.getElementById('scroll-container');
  
      
      if (element) {
        
          element.scrollTo({
              left: 0, 
              behavior: 'smooth' 
          });
      } else {
          console.error('Element not found with ID:', elementId);
      }
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    var block = document.getElementById("scroll-container");
    var button = document.getElementById("toggleButton");
    var image = document.getElementById("toggleButton");
    var isScrolledRight = false;

    block.style.scrollBehavior = 'smooth';

    button.addEventListener('click', function() {
        if (isScrolledRight) {
            block.scrollLeft = 0;
            image.style.transform = 'rotate(0deg)';
        } else {
            block.scrollLeft = block.scrollWidth - block.clientWidth;
            image.style.transform = 'rotate(180deg)';
        }
        isScrolledRight = !isScrolledRight;
    });
});
