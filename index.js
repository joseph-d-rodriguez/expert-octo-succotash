generateDataBetween = (char1, char2) => {
	//console.log(`${char1} - ${char2} (${String(char1).charCodeAt(0)} - ${String(char2).charCodeAt(0)})`);
	return String.fromCharCode(parseInt(Math.random() * (String(char2).charCodeAt(0) - String(char1).charCodeAt(0)) + String(char1).charCodeAt(0)));
};

// Slowly randomly generates alphanumerics
gimmeDatData = function* () {
	
};

// Slowly returns something
eventuallyData = (max = 2000, min = 500) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => {
				switch(generateDataBetween(1, 3)) {
					case '1':
						resolve(generateDataBetween('A', 'Z'));
						break;
					case '2':
						resolve(generateDataBetween('a', 'z'));
						break;
					case '3':
						resolve(generateDataBetween('0', '9'));
						break;

				}
			},
			Math.random() * (max - min) + min
		);
	});
};

module.exports = {
	generateDataBetween,
	gimmeDatData,
	eventuallyData
}
