darken = function (red, blue, green){
	for (var i = 0; i < lighten.length; i++) {
		var percentage = lighten[i] * 0.2;
		lighten[i] = lighten[i] - percentage;
	}
	return red + " " + green + " " + blue + " ";
};