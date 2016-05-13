module.exports =  styleObject => {
	const styles = {};

	if(typeof styleObject === 'string') {
    const isDash = styleObject.indexOf('-');
    const atColon = styleObject.indexOf(':');
    const subDash = styleObject.slice(0, isDash);

    const key = isDash > -1
      ? (styleObject.slice(0, isDash) + styleObject.slice(isDash + 1, isDash + 2).toUpperCase() + styleObject.slice(isDash + 2, atColon))
      : styleObject.slice(0, atColon);

    const isNum = styleObject.slice(atColon + 2, styleObject.length - 1);
    const value = isNaN(isNum) ? isNum : Number(isNum);

		styles[key] = value;

	} else {
		for(var key in styleObject) {
			if(!isNaN(key)) {
				styles[styleObject[key]] = styleObject[styleObject[key]];
			}
		}
	}
	return styles;
}
