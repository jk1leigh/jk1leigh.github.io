//Jordan Kovacs, CSCE //
function myFunction(){
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
	
	if(dots.style.display == "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
	
}


function showNextImg(){
	let birthday = document.getElementById("me");
	let number = document.getElementById("data-num");
	
	if(number == 1){
		birthday.src = "images/me.jpg";
		birthday.setAttribute("data-num","2");
	}
	else if(number == 2){
		birthday.src = "images/pitbull.jpg";
		birthdaysetAttribute("data-num","3");
	}
	else if(number == 3){
		birthday.src = "images/roomies.jpg";
		birthdaysetAttribute("data-num","4");
	}
	else if(number == 4){
		birthday.src = "images/camandme.jpg";
		birthdaysetAttribute("data-num","5");
	}
	}
}

function showPrevImg(){
	let birthday = document.getElementById("me");
	let number = birthday.getAttribute("data-num");
	
	if(number == 1){
		birthday.src = "images/me.jpg";
		birthday.setAttribute("data-num", "2");
	}
	else if(number == 2){
		birthday.src = "images/pitbull.jpg";
		birthday.setAttribute("data-num","3");
	}
	else if(number == 3){
		birthday.src = "images/roomies.jpg";
		birthday.setAttribute("data-num","4");
	}
	}
	else if(number == 5){
		birthday.src = "images/camandme.jpg";
		birthday.setAttribute("data-num","1");
	}
}