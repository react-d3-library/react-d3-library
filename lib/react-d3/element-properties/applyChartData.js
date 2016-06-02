module.exports = function(reactD3Elements, state, rd3Id, i){
	if(state[rd3Id]['__chart__']) {
        reactD3Elements[i]['__chart__'] = state[rd3Id]['__chart__'];
	}
}

