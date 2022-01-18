//Script to control images slideshow in hero section

//Using qureySelector all to get all images attached to hero class
var slideShowImages = document.querySelectorAll('.slideshowContainer img');
//intializing image counter to zero
var imageCounter = 0;

//verifying all images are being stored in an array
console.log(slideShowImages);


slideShowImages[imageCounter].style.opacity = 1;
setInterval(nextImage, 2000);


function nextImage()    {
    console.log(imageCounter);
    //zindex is changed so next image will display
    slideShowImages[imageCounter].style.zIndex = -2;

    //Timeout is set for current image by place in holder var
    var currentImage = imageCounter;
    
    setTimeout(() =>    {
        slideShowImages[currentImage].style.opacity = 0;
    }, 1000);

    //Using moduls as per to make a continuous loop
    imageCounter = (imageCounter + 1) % slideShowImages.length;
    slideShowImages[imageCounter].style.opacity = 1;
    slideShowImages[imageCounter].style.zIndex = -1;
} 

