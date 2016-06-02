//register all the event listeners

module.exports = function(reactD3Elements, state, rd3Id, i){

  	for(let key in state[rd3Id]) {

    	if(key !== '__data__' && 
       	key !== '__zoom' && 
       	key !== '__onmount' && 
       	key !== '__transition__' && 
       	key !== '__chart__' &&
       	key !== 'data-react-d3-id') {

        	reactD3Elements[i][key] = state[rd3Id][key];
          let index = key.indexOf('.');
          let eventName = index > 0 ? key.slice(4, index) : key.slice(4);
          reactD3Elements[i].addEventListener(eventName, state[rd3Id][key]);

    	}

  	}

}