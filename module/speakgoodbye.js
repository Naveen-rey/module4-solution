(function (window) {

var bye = {};

var speakWord = "Good Bye";


byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}


window.bye = bye;

})(window);