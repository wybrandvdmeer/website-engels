showSlides();
showContent();

function getSlideIndex() {
  if(sessionStorage.slideIndex === undefined) {
    return sessionStorage.slideIndex;
  }
  return parseInt(sessionStorage.slideIndex);
}

function setSlideIndex(slideIndex) {
  sessionStorage.slideIndex = slideIndex;
}

function getShowContent() {
  if(sessionStorage.showContent === undefined) {
    sessionStorage.showContent = true;
  }
  return sessionStorage.showContent === 'true';
}

function setShowContent(showContent) {
  sessionStorage.showContent = showContent;
}

function showContent() {
    var content = document.getElementsByClassName("content")[0];
    var up = document.getElementsByClassName("content-up")[0];
    var down = document.getElementsByClassName("content-down")[0];
    var showContent = getShowContent();
   
    if(showContent) {
      content.style.display = "block";
      down.style.display = "block";
      up.style.display = "none";
    } else {
      content.style.display = "none";
      down.style.display = "none";
      up.style.display = "block";
    }
}

function hideContent() {
    var shwContent = getShowContent();
    setShowContent(!shwContent);
    showContent();
}

function hideCurrentBackGround() {
  clearTimeout(sessionStorage.timeOut);

  var slides = document.getElementsByClassName("slide");
  slides[getSlideIndex() - 1].style.display = "none";
}

function showCurrentBackGround() {
  showSlides();
}

function showSlides() {
  if(sessionStorage.timeOut === undefined) {
    showSlidesWithTimer(true);
  } else {
    /* User navigated to new page: lost the timer. 
    */ 
    var slides = document.getElementsByClassName("slide");
    showSlide(getSlideIndex(), slides);
    showSlidesWithTimer(false);
  }
}

function showSlidesWithTimer(newImage) {

  if(newImage === undefined) {
    newImage = true;
  }

  if(newImage) {
    var slideIndex = getSlideIndex();

    if(slideIndex === undefined) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
  
    var slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {
      slideIndex = 1;
    } 

    setSlideIndex(slideIndex);
    showSlide(slideIndex, slides);
  }

  sessionStorage.timeOut = setTimeout(showSlidesWithTimer, 10000);
}

function showSlide(slideIndex, slides) {
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex - 1].style.display = "block";
}