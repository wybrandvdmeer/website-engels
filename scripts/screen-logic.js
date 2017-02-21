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

function toggleContent() {
  showContentOnScreen = !showContentOnScreen;
  showContent();
}

function hideCurrentBackGround() {
  clearTimeout(sessionStorage.timeOut);
  var slides = getSlides();
  slides[getSlideIndex()].style.display = "none";
}

function showCurrentBackGround() {
  showSlides(getSlideIndex());
}

function getSlides() {
  if(isTecBackGround()) {
    return document.getElementsByClassName("slide");
  } 
  return document.getElementsByClassName("nat-slide");
}

function showSlides(slideIndex) {

  var slides = getSlides();

  if(slideIndex === undefined) {
    slideIndex = getSlideIndex();

    if(slideIndex === undefined) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    
    setSlideIndex(slideIndex);
  } 

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex].style.display = "block";

  sessionStorage.timeOut = setTimeout(showSlides, 10000);
}

function toggleBackGroundSeries() {
  /* Shut down the old serie. 
  */
  var slides = getSlides();
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  clearTimeout(sessionStorage.timeOut);

  setTecBackGround(!isTecBackGround());

  /* Show new button and background. 
  */
  showBackGroundButton();
  showSlides();
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


