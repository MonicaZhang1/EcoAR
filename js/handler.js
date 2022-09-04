AFRAME.registerComponent('accepts-clicks', {
  init: function() {
    this.el.addEventListener('touchend', handleClickEvent);
    this.el.addEventListener('click', handleClickEvent);
  },
  tick: function() {
    hideSpeechBubble();
  }
});

function handleClickEvent() {
  console.log("CLICK EVENT TRIGGERED");
  animals.forEach(function(animal) {
    var animalMarker = document.querySelector("#" + animal.name + "-marker");
    if (animalMarker && animalMarker.object3D.visible) {
      toggleSpeechBubble(animal.dialogue);
    }
  });
}
  
  
function toggleSpeechBubble(dialogue) {
  var speechBubble = document.querySelector(".speech-bubble");
	if (speechBubble.style.display === 'none' || !speechBubble.style.display) {
		speechBubble.innerHTML = dialogue;
		speechBubble.style.display = 'block';
	} else {
		speechBubble.style.display = 'none';
	}
}

function hideSpeechBubble (){
  var speechBubble = document.querySelector(".speech-bubble");
  if (speechBubble.style.display === 'none' || !speechBubble.style.display) return;

  var shouldHide = true;
  animals.forEach(function(animals){
    var animalMarker = document.querySelector("#" + animals.name + "-marker");
    if (animalMarker && animalMarker.object3D.visible) shouldHide = false;
  });

  if (shouldHide) speechBubble.style.display = 'none';	
}
