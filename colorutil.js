module.exports = {

	luminosity: function(red, green, blue){
		return 0.2126*red + 0.7152*green + 0.0722*blue;

		darken = function (red, blue, green){
			for (var i = 0; i < lighten.length; i++) {
				var percentage = lighten[i] * 0.2;
				lighten[i] = lighten[i] - percentage;
			}
			return red + " " + green + " " + blue + " ";
		};
	};
}