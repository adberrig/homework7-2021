var video;
video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
		video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("New speed is" + " " + video.playbackRate);
		video.playbackRate *=.95
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("New speed is" + " " + video.playbackRate);
		video.playbackRate /=.95
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Orignal Location" + " " + video.currentTime);
	if(video.currentTime < (video.duration - 15)){
		video.currentTime += 15;
		console.log("New Location" +  " " + video.currentTime);
	}
	else {
		video.currentTime = 0;
		console.log("New Location" + " " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === true) {    
		video.muted = false;
		document.querySelector("#mute").innerHTML= "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML= "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100;
	console.log(video.volume);
		document.querySelector("#volume").innerHTML= this.value+"%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});
