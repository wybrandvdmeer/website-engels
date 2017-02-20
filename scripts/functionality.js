var showContentOnScreen = true;

showSlides();
showContent();
showBackGroundButton();

function isTecBackGround() {
  if(sessionStorage.tecBackGround === undefined) {
    return true;
  }
  return sessionStorage.tecBackGround === 'true';
}

function setTecBackGround(tecBackGround) {
  sessionStorage.tecBackGround = tecBackGround;
}

function getSlideIndex() {
  if(sessionStorage.slideIndex === undefined) {
    return sessionStorage.slideIndex;
  }
  return parseInt(sessionStorage.slideIndex);
}

function setSlideIndex(slideIndex) {
  sessionStorage.slideIndex = slideIndex;
}

function showContent() {

    if(window.initLocalContent !== undefined) {
        window.initLocalContent();
        window.initLocalContent = undefined;
        return;
    }

    var content = document.getElementsByClassName("content")[0];
    var up = document.getElementsByClassName("content-up")[0];
    var down = document.getElementsByClassName("content-down")[0];
   
    if(showContentOnScreen) {
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
  showContentOnScreen = !showContentOnScreen;
  showContent();
}

function hideCurrentBackGround() {
  clearTimeout(sessionStorage.timeOut);

  var slides = getSlides();
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
    var slides = getSlides();
    showSlide(getSlideIndex(), slides);
    showSlidesWithTimer(false);
  }
}

function getSlides() {
    if(isTecBackGround()) {
      return document.getElementsByClassName("slide");
    } else {
      return document.getElementsByClassName("nat-slide");
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
  
    var slides = getSlides();
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

function toggleBackGroundSeries() {
  /* Shut down the old serie. 
  */
  var slides = getSlides();
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  clearTimeout(sessionStorage.timeOut);

  /* Toggle. */
  setTecBackGround(!isTecBackGround());

  /* Show new button and background. 
  */
  showBackGroundButton();
  showSlide(getSlideIndex(), getSlides());
  showSlidesWithTimer(false);
}

function showBackGroundButton() {
  var natBackGroundsButton = document.getElementById('nat-backgrounds-button');  
  var tecBackGroundsButton = document.getElementById('tec-backgrounds-button');  

  if(isTecBackGround()) {
    natBackGroundsButton.style.display = 'block';
    tecBackGroundsButton.style.display = 'none';
  } else {
    natBackGroundsButton.style.display = 'none';
    tecBackGroundsButton.style.display = 'block';
  }
}


