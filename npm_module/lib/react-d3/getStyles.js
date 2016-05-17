module.exports =  styleObject => {

	var styles = {};

	if(typeof styleObject === 'string') {
		let styleArray = styleObject.split(';');
		styleArray.pop();
		styleArray.forEach(style => {
			let isDash = style.indexOf('-');
		    let indexOfColon= style.indexOf(':');

		    let key = isDash > -1
		      ? (style.slice(0, isDash) + style.slice(isDash + 1, isDash + 2).toUpperCase() + style.slice(isDash + 2, indexOfColon))
		      : style.slice(0, indexOfColon);

		    let isNum = style.slice(indexOfColon + 1);
		    let value = isNaN(isNum) ? isNum.trim() : Number(isNum);
			styles[key.trim()] = value;
		})


	} else {
		for(var key in styleObject) {
			if(!isNaN(key)) {
				styles[styleObject[key]] = styleObject[styleObject[key]];
			}
		}
	}
	return styles;
}
