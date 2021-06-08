//Code to add a fullscreen widget and make games fullscreen
//this can skip some ads removePrerollAndDisplayGame()

//function to make element fulscreen
function goFullScreen () {
  //get the game wrapper
  let game = document.getElementsByClassName("field-game")[0];
  
  //make it fullscreen :)
  game.requestFullscreen();
}

function replaceFullScreenBtn () {
  //store the new version of the button and the old version
  let oldElement = document.getElementsByClassName("requestfullscreen")[0];
  let newElement = oldElement.cloneNode(true);
  
  
  //style and change the text of the new button
  newElement.style.backgroundImage = "None";
  newElement.style.fontSize = "18px";
  newElement.style.width = "auto";
  newElement.innerText = "GO FULLSCREEN";
  
  //add an event listener to make the game fullscreen
  newElement.addEventListener("click", function (e) {
    e.preventDefault();
    goFullScreen();
  });
  
  oldElement.parentNode.replaceChild(newElement, oldElement);
}

function init () {
  //create a fullscreen link element
  replaceFullScreenBtn();
  
  //finally, skip the ads
  removePrerollAndDisplayGame()

  //remove addblock message
  var adblock = document.getElementsByClassName("blocker-detected-2")[0];
  adblock.remove();
}

if (window.location.hostname == "www.coolmathgames.com") {
  init();
} else {
  window.location.href = "https://www.coolmathgames.com";
}
