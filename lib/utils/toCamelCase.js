module.exports = spinalCaseValue => {
	'use strict';
	let strArray = spinalCaseValue.split('');
	let shouldCapitalize = false;
	return strArray.reduce((acc, cur) => {
		if(cur === '-') {
			shouldCapitalize = true;
			return acc;
		} else if (shouldCapitalize) {
			shouldCapitalize = false;
			return acc.concat(cur.toUpperCase());
		} else {
			return acc.concat(cur);
		}
	})
}




