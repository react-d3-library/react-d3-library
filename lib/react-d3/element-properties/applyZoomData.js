module.exports = function(reactD3Elements, state, rd3Id, i){
    if(state[rd3Id]['__zoom']) {
		reactD3Elements[i]['__zoom'] = state[rd3Id]['__zoom'];
    }
}

