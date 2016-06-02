module.exports = function(reactD3Elements, state, rd3Id, i){
  	if(state[rd3Id]['__data__'] !== null) {
        reactD3Elements[i]['__data__'] = state[rd3Id]['__data__'];
    }
}

