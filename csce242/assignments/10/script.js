// Advertisement texts array
const ads = [
    "Each image has been edited by our superior staff",
    "Sale: Up to 50% off on selected items!",
    "New arrivals are now in stock",
    "Sign up for our newsletter and get 10% off",
    "Free shipping on orders over $50"
  ];
  
  let currentAdIndex = 0;
  
  // Function to display an advertisement
  function displayAd() {
    const adBanner = document.getElementById('ad-banner');
    adBanner.textContent = ads[currentAdIndex];
    
    currentAdIndex = (currentAdIndex + 1) % ads.length;
  }
  
  // Associative array of images and attributions
  const images = [
    { src: 'images/garden.jpg', attribution: 'https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7', credit: 'Image by vecstock on Freepik' },
    { src: 'images/golden.jpg', attribution: 'https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4', credit: 'Image by wirestock on Freepik' },
    { src: 'images/mountain-lake.jpg', attribution: 'https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4', credit: 'Image by wirestock on Freepik' },
    { src: 'images/small-house.jpg', attribution: 'https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4', credit: 'Image by wirestock on Freepik' },
    { src: 'images/snow.jpg', attribution: 'https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4', credit: 'Image by wirestock on Freepik' }
    // Replace with actual image paths and attribution information
  ];
  
  // Function to create and display images with attributions
  function displayImagesWithAttributions() {
    const container = document.getElementById('images-container');
  
    images.forEach(image => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('image-wrapper');
  
      const img = document.createElement('img');
      img.setAttribute('src', image.src);
      img.setAttribute('alt', 'Attributed image');
  
      const attribution = document.createElement('p');
      attribution.classList.add('attribution');
      attribution.innerHTML = `<a href="${image.attribution}" target="_blank">${image.credit}</a>`;
  
      wrapper.appendChild(img);
      wrapper.appendChild(attribution);
      container.appendChild(wrapper);
    });
  }
  
  // Set interval for changing ads and load images with attributions on page load
  window.onload = () => {
    setInterval(displayAd, 2000);
    displayAd(); // Display first ad immediately
    displayImagesWithAttributions(); // Display all images with attributions
  };
  