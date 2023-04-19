var images = [
    "SlideShow1.jpeg",
    "SlideShow2.avif",
    "Slideshow4.webp"
];

function showImage(index) {
    var slideshow = document.getElementById("slideshow");
    slideshow.style.backgroundImage = "url('" + images[index] + ")";
}

var currentIndex = 0;

setInterval(function() {
    currentIndex++;
    if (currentIndex == images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}, 3000);