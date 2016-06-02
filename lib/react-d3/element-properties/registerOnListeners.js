//register event listeners stored in __on

module.exports = function(reactD3Elements, state, rd3Id, i){

    if(state[rd3Id]['__on']) {
        reactD3Elements[i]['__on'] = state[rd3Id]['__on']
        for(let j = 0; j < state[rd3Id]['__on'].length; j++) {
            reactD3Elements[i].addEventListener(
              state[rd3Id]['__on'][j]["type"], 
              state[rd3Id]['__on'][j]["listener"], 
              state[rd3Id]['__on'][j]["capture"]
            )
        } 
    }

}