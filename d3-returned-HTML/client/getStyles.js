module.exports =  styleObject => {
		// console.log(typeof JSON.parse(styleObject));
  		var styles = {}
  		if(typeof styleObject === 'string') {
  			var index1 = styleObject.indexOf(':');
  			var index2 = styleObject.indexOf(';')
  			var key = styleObject.slice(0, index1);
  			if (key === 'text-anchor') key = "textAnchor"
  			var value = styleObject.slice(index1 + 2, index2);
  			styles[key] = value;
  			console.log('stylesObject: ', styles)
  		} else {
	  		for(var key in styleObject) {
	  			if(!isNaN(key)) {
	  				styles[styleObject[key]] = styleObject[styleObject[key]];
	  			} 
	  		}
	  	}	
  		return styles;
}