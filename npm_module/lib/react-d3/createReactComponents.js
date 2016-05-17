const extractData = require('./extractData');
const passReactState = require('./passReactState');

const React = require('react');

//Recurssively create all nested React components with reactData
//Child elements are sent back back to extractData and then mapped over to be called recurssively
//TextContent is always passed as a child, if null react ignores it
function makeChildNodes(reactData, stateData) {

  return reactData.map((obj, i) => {

    return obj.children.length === 0

      ? (
          React.createElement(
            obj.tag,
            passReactState(obj, stateData),
            obj.props.textContent),
        )

      : React.createElement(obj.tag, obj.props, extractData(obj.children).mappedData.map(obj => makeChildNodes([obj], stateData)))

  });

}

module.exports = makeChildNodes
