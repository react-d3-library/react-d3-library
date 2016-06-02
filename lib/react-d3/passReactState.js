module.exports = (obj, stateData, getState) => {
  let reactId = obj.props['data-react-d3-id']

  //Applies React Component State D3 Data to new React Elements from D3
  if(stateData[reactId] instanceof Object) {
    for(let key in stateData[reactId]) {
      if(obj.props[key]) {
        obj.props[key] = stateData[reactId][key];
      }
    }
  }

  return obj.props;
}