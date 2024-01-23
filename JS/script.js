var nas = document.getElementById("nas");
var audio = document.getElementById("audio");

var unCop = true;

nas.addEventListener("click", function () {
	if (unCop) {
		audio.play();
		unCop = false;
	}
});
