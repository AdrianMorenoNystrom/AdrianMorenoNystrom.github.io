document.addEventListener("DOMContentLoaded", function () {
  // Get references to the HTML elements for each section
  var aboutpage1 = document.getElementById("aboutpage1");
  var aboutpage2 = document.getElementById("aboutpage2");
  var aboutpage3 = document.getElementById("aboutpage3");

  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY;
      // Get the height of the first section
      var aboutpage1Height = aboutpage1.offsetHeight;

      // Calculate the scroll position to trigger the effect for aboutpage1 and aboutpage2
      var triggerPosition1 = aboutpage1.offsetTop + aboutpage1Height / 2; // Adjust the divisor to make the first image fade out earlier
      var triggerPosition2 = aboutpage2.offsetTop + aboutpage2.offsetHeight / 2;
      // Check if the scroll position is below the trigger position for aboutpage1
      if (scrollPosition > triggerPosition1 && scrollPosition <= triggerPosition2) {
          // Calculate opacity based on scroll position for aboutpage1
          var opacity1 = 1 - (scrollPosition - triggerPosition1) / (aboutpage1Height / 2);

          // Apply opacity to aboutpage1
          aboutpage1.style.opacity = opacity1;

          // Apply inverse opacity to aboutpage2
          aboutpage2.style.opacity = 0 - opacity1;
          aboutpage3.style.opacity= 0;
      } else if (scrollPosition > triggerPosition2) {
          // Calculate opacity based on scroll position for aboutpage2
          var opacity2 = 1 - (scrollPosition - triggerPosition2) / (aboutpage2.offsetHeight / 2);

          // Apply opacity to aboutpage2
          aboutpage2.style.opacity = opacity2;

          // Apply inverse opacity to aboutpage3
          aboutpage3.style.opacity = 0 - opacity2;
      } else {
          // Reset opacity if above the trigger position for aboutpage1
          aboutpage1.style.opacity = 1;
          aboutpage2.style.opacity = 0;
          aboutpage3.style.opacity = 0;
      }
  });
});
var slideIndex1 = 1;
showDivs(slideIndex1, 'slides');

var slideIndex2 = 1;
showDivs(slideIndex2, 'slides2');

var slideIndex3 = 1;
showDivs(slideIndex3,'slides3')

function plusDivs(n, slidesClass) {
    if (slidesClass === 'slides') {
        showDivs(slideIndex1 += n, 'slides');
    } else if (slidesClass === 'slides2') {
        showDivs(slideIndex2 += n, 'slides2');
    }
    else if(slidesClass==='slides3'){
        showDivs(slideIndex3 += n,'slides3')
    }
}

function showDivs(n, slidesClass) {
    var i;
    var slides = document.getElementsByClassName(slidesClass);
    if (n > slides.length) { 
        if (slidesClass === 'slides') {
            slideIndex1 = 1;
        } else if (slidesClass === 'slides2') {
            slideIndex2 = 1;
        }else if(slidesClass==='slides3'){
            slideIndex3=1;
        }
    }
    if (n < 1) {
        if (slidesClass === 'slides') {
            slideIndex1 = slides.length;
        } else if (slidesClass === 'slides2') {
            slideIndex2 = slides.length;
        }else if (slidesClass ==='slides3'){
            slideIndex3=slides.length;
        }
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    if (slidesClass === 'slides') {
        slides[slideIndex1 - 1].style.display = 'block';
    } else if (slidesClass === 'slides2') {
        slides[slideIndex2 - 1].style.display = 'block';
    }else if (slidesClass ==='slides3'){
        slides[slideIndex3 - 1].style.display = 'block';
    }

    if(slideIndex1==2){
      document.getElementById("secondSlideText").style.display="block";
    }else{
      document.getElementById("secondSlideText").style.display="none";
    }

    if(slideIndex3==1){
        document.getElementById("firstSlideText").style.display="block";
        document.getElementById("secondSlideText2").style.display="none";
        document.getElementById("thirdSlideText").style.display="none";
        document.getElementById("fourthSlideText").style.display="none";
    }
    else if(slideIndex3==2){
        document.getElementById("firstSlideText").style.display="none";
        document.getElementById("secondSlideText2").style.display="block";
        document.getElementById("thirdSlideText").style.display="none";
        document.getElementById("fourthSlideText").style.display="none";
    }
    else if(slideIndex3==3){
        document.getElementById("firstSlideText").style.display="none";
        document.getElementById("secondSlideText2").style.display="none";
        document.getElementById("thirdSlideText").style.display="block";
        document.getElementById("fourthSlideText").style.display="none";
    }
    else{
        document.getElementById("firstSlideText").style.display="none";
        document.getElementById("secondSlideText2").style.display="none";
        document.getElementById("thirdSlideText").style.display="none";
        document.getElementById("fourthSlideText").style.display="block";
    }

}
