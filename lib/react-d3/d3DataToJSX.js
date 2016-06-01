import React, { Component } from 'react';
import extractData from './extractData';

module.exports = nodes => {

  // If nodes is a single element wrap it in an array for extractData to work properly
  if(!Array.isArray(nodes)) nodes = [nodes];

  // Extract all the relevant data for React createElement from each DOM node.
  let reactData = extractData(nodes);

  return reactData;
}