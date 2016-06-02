import extractData from './extractData';
import passReactState from './passReactState';
import React from 'react';

//Recursively create all nested React components with reactData
//Child elements are sent back back to extractData and then mapped over to be called recursively
//TextContent is always passed as a child, if null react ignores it
function makeChildNodes(reactData, stateData, getState) {

  return reactData.map((obj, i) => {

    return obj.children.length === 0

      ? (
          React.createElement(
            obj.tag,
            passReactState(obj, stateData, getState),
            obj.props.textContent)
        )

      : React.createElement(obj.tag, obj.props, extractData(obj.children).mappedData.map(obj => makeChildNodes([obj], stateData, getState)))

  });

}

module.exports = makeChildNodes