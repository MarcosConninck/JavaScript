let userAge = prompt("tell me how old are you");
let userLicence = prompt("do you have licence? (y/n)");

// userLicence validation
if (userLicence == "y") {
	userLicence = true;
} else {
	userLicence = false;
}

if (userAge >= 18 && userLicence) {
	console.log("you can drive, have age and licence");
} else if (userAge < 18 && !userLicence) {
	console.log("you are underage and without licence! are you crazy?");
} else if (userAge >= 18 && !userLicence) {
	console.log("you can not drive, because you dont have licence..");
} else {
	console.log("you CANNOT drive! where did you buy this?");
}
