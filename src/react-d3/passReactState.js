module.exports = (obj, stateData) => {
  var reactId = obj.props['__react-d3-id']

  if(stateData[reactId] instanceof Object) {
    for(var key in stateData[reactId]) {
      if(obj.props[key]) {
        obj.props[key] = stateData[reactId][key];
      }
    }
  }

  return obj.props;
}
