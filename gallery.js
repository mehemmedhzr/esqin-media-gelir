// document.addEventListener('DOMContentLoaded', (event) => {
//     // First, get all the newsItem elements
//     let newsItems = document.querySelectorAll('.newsItem');

//     // Get the zoomedImgContainer element
//     let zoomedImage = document.querySelector('.zoomedImage');

//     let zoomedImgContainer = document.querySelector('.zoomedImgContainer');

//     let closeIcon = document.querySelector('.zoomedImgContainer i');

    

//     // For each newsItem, add a click event listener
//     newsItems.forEach((newsItem) => {
//         newsItem.addEventListener('click', function(event) {
            
//             $(".zoomedImage").trigger('destroy.owl.carousel');

//             let imgElements = this.querySelectorAll('.owl-item:not(.cloned) .thumb img');

//             zoomedImage.classList.remove("owl-hidden");
//             zoomedImage.classList.add("owl-carousel");
            
//             if (imgElements) {
//                 imgElements.forEach((imgElement) => {

//                     let imgSrc = imgElement.getAttribute('src');

//                     let newImage = document.createElement('img');

//                     newImage.setAttribute('src', imgSrc);
                    
//                     zoomedImage.appendChild(newImage);

//                     zoomedImgContainer.style.display = 'flex';

//                 });
//             }
            
//             let owl = $(".zoomedImage");
//             owl.owlCarousel({
//                 items: 1,
//                 nav: true,
//                 loop: true,
//             });
//             console.log(zoomedImage.firstElementChild)
//         });
//     });
    

    

//     closeIcon.addEventListener("click", function () {
//         console.log(zoomedImage.firstElementChild)
//         zoomedImgContainer.style.display = "none";
//         zoomedImage.classList.remove("owl-carousel");
//         zoomedImage.classList.remove("owl-loaded");
//         zoomedImage.classList.remove("owl-drag");
//         while (zoomedImage.firstElementChild) {
//             zoomedImage.removeChild(zoomedImage.firstElementChild); 
//         }
//     });


//     // zoomedImgContainer.addEventListener("click", function () {
//     //     if (!zoomedImage.contains(event.target)) {
//     //         // Make the zoomedImgContainer invisible
//     //         zoomedImgContainer.style.display = "none";
//     //     }
//     // });


//     // zoomedImage.addEventListener('click', function(event) {
//     //     // Stop the event from bubbling up to the zoomedImgContainer
//     //     event.stopPropagation();
//     // });
    
//     // zoomedImgContainer.addEventListener('click', function() {
//     //     // Make the zoomedImgContainer invisible
//     //     zoomedImgContainer.style.display = "none";
//     // });
// });


document.addEventListener('DOMContentLoaded', (event) => {
    // First, get all the newsItem elements
    let newsItems = document.querySelectorAll('.newsItem');

    // Get the zoomedImgContainer element
    let zoomedImage = document.querySelector('.zoomedImage');

    let zoomedImgContainer = document.querySelector('.zoomedImgContainer');

    let closeIcon = document.querySelector('.zoomedImgContainer i');

    // For each newsItem, add a click event listener
    newsItems.forEach((newsItem) => {
        newsItem.addEventListener('click', function(event) {
            $(".zoomedImage").trigger('destroy.owl.carousel');

            let imgElements = this.querySelectorAll('.owl-item:not(.cloned) .thumb img');

            zoomedImage.classList.remove("owl-hidden");
            zoomedImage.classList.add("owl-carousel");
            
            if (imgElements) {
                imgElements.forEach((imgElement) => {
                    let imgSrc = imgElement.getAttribute('src');
                    let newImage = document.createElement('img');
                    newImage.setAttribute('src', imgSrc);
                    
                    zoomedImage.appendChild(newImage);

                    zoomedImgContainer.style.display = 'flex';
                });
            }
            
            let owl = $(".zoomedImage");
            owl.owlCarousel({
                items: 1,
                nav: true,
                loop: true,
            });
        });
    });

    // Stop click events from bubbling up from the zoomedImage
    zoomedImage.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Hide the zoomedImgContainer when it's clicked (but not when zoomedImage or its children are clicked)
    zoomedImgContainer.addEventListener('click', function() {
        zoomedImgContainer.style.display = 'none';
        zoomedImage.classList.remove("owl-carousel");
        zoomedImage.classList.remove("owl-loaded");
        zoomedImage.classList.remove("owl-drag");
        while (zoomedImage.firstElementChild) {
            zoomedImage.removeChild(zoomedImage.firstElementChild);
        }
        $(".zoomedImage").trigger('destroy.owl.carousel');
    });

    // Keep your original closeIcon event listener
    closeIcon.addEventListener("click", function () {
        zoomedImgContainer.style.display = "none";
        zoomedImage.classList.remove("owl-carousel");
        zoomedImage.classList.remove("owl-loaded");
        zoomedImage.classList.remove("owl-drag");
        while (zoomedImage.firstElementChild) {
            zoomedImage.removeChild(zoomedImage.firstElementChild);
        }
        $(".zoomedImage").trigger('destroy.owl.carousel');
    });
});




