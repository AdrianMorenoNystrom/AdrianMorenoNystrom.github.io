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
