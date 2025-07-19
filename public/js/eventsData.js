// Fetch and inject all recent events from events.html into index.html, with Owl Carousel animation
function loadRecentEvents() {
  fetch('events.html')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      // Find the first .site-section.fund-raisers
      const recentEventsSection = doc.querySelector('.site-section.fund-raisers');
      if (recentEventsSection) {
        // Find the carousel container
        const block11 = recentEventsSection.querySelector('.col-md-12.block-11');
        if (block11) {
          // Only keep the carousel part
          const carousel = block11.querySelector('.nonloop-block-11.owl-carousel');
          if (carousel) {
            // Clone the carousel and remove text content, keeping only images
            const clonedCarousel = carousel.cloneNode(true);
            const cards = clonedCarousel.querySelectorAll('.card.fundraise-item');
            cards.forEach(card => {
              // Keep only the image and link, remove card-body
              const cardBody = card.querySelector('.card-body');
              if (cardBody) {
                cardBody.remove();
              }
            });
            // Prepare the HTML to inject (with heading)
            const heading = '<div class="row mb-5"><div class="col-md-12"><h2>Recent Events</h2></div></div>';
            // Wrap in the same structure as events.html
            const wrapper = document.createElement('div');
            wrapper.className = 'row';
            const col = document.createElement('div');
            col.className = 'col-md-12 block-11';
            // Add the modified carousel
            col.appendChild(clonedCarousel);
            wrapper.appendChild(col);
            // Insert into the container
            const target = document.getElementById('recent-events-container');
            if (target) {
              target.innerHTML = heading;
              target.appendChild(wrapper);
              // Initialize Owl Carousel after DOM update
              if (window.$ && window.$.fn && window.$.fn.owlCarousel) {
                // Use setTimeout to ensure DOM is updated
                setTimeout(function() {
                  $(target).find('.nonloop-block-11.owl-carousel').owlCarousel({
                    center: false,
                    items: 1,
                    loop: true,
                    stagePadding: 0,
                    margin: 50,
                    nav: true,
                    slideBy: 1,
                    dots: true,
                    dotsEach: 1,
                    dotsData: false,
                    autoplay: true,
                    rewind: false,
                    autoplayHoverPause:true,
                    autoplaySpeed: 2000,
                    navSpeed: 280,
                    pagination:false,
                    navigation:true,
                    navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
                    responsive:{
                      600:{ stagePadding: 0, items:1 },
                      800:{ stagePadding: 40, items:2 },
                      1000:{ stagePadding: 80, items:3 }
                    }
                  });
                }, 0);
              }
            }
          }
        }
      }
    });
}

document.addEventListener('DOMContentLoaded', loadRecentEvents);
