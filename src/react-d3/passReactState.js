module.exports = (obj, stateData) => {
  var reactId = obj.props['__react-d3-id']

  if(stateData[reactId] instanceof Object) {
    for(var key in stateData[reactId]) {
      if(obj.props[key]) {
        obj.props[key] = stateData[reactId][key];
        console.log(obj.props[key], stateData[reactId][key])
        console.log(obj.props, stateData[reactId])
      }
    }
  }

  // if(reactId === "circle.0.0.1") {
  //   obj.props['r'] = stateData[reactId]
  // }

  return obj.props;
}
