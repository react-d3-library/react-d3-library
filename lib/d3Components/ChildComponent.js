import React from 'react';
import ReactDOM from 'react-dom';
import createReactComponents from './../react-d3/createReactComponents';

module.exports = React.createClass({

  getInitialState: function() {
    return {reactComponents: []}
  },

  componentWillReceiveProps: function(nextProps) {
      var props = nextProps.data;
      var reactComponents = createReactComponents(props.d3DOM, props.state, nextProps.getState)
      this.setState({reactComponents: reactComponents})
  },

  componentDidUpdate: function() {
    var reactD3Elements = document.querySelectorAll('[data-react-d3-id]');
    var state = this.props.data.state;
    for(var i = 0; i < reactD3Elements.length; i++) {
      var rd3Id = reactD3Elements[i].getAttribute('data-react-d3-id');

      if(!state[rd3Id]) {
        continue;
      }

      if(state[rd3Id]['__data__'] !== null) {
        reactD3Elements[i]['__data__'] = state[rd3Id]['__data__']
      }

      if(state[rd3Id]['__on']) {
        reactD3Elements[i]['__on'] = state[rd3Id]['__on']
        for(var j = 0; j < state[rd3Id]['__on'].length; j++) {
          reactD3Elements[i].addEventListener(state[rd3Id]['__on'][j]["type"], state[rd3Id]['__on'][j]["listener"], state[rd3Id]['__on'][j]["capture"])
        } 
          
      }

      if(state[rd3Id]['__zoom']) {
        reactD3Elements[i]['__zoom'] = state[rd3Id]['__zoom']
      }

       if(state[rd3Id]['__onload']) {
        var callback = state[rd3Id]['__onload'].bind(this);
        setTimeout(function(){
          callback();
        }, 0)
        
      }

      if(state[rd3Id]['__transition__']) {
        reactD3Elements[i]['__transition__'] = state[rd3Id]['__transition__']
      }

      if(state[rd3Id]['__chart__']) {
        reactD3Elements[i]['__chart__'] = state[rd3Id]['__chart__']
      }

      //register all the event listeners
      for(var key in state[rd3Id]) {

        if(key !== '__data__' && 
           key !== '__zoom' && 
           key !== '__onload' && 
           key !== '__transition__' && 
           key !== '__chart__' &&
           key !== 'data-react-d3-id') {

              reactD3Elements[i][key] = state[rd3Id][key]
              let index = key.indexOf('.');
              let eventName = index > 0 ? key.slice(4, index) : key.slice(4)
              reactD3Elements[i].addEventListener(eventName, state[rd3Id][key])
        }
      }
    }

  },

  componentWillUnmount: function(){
    var oldElement = ReactDOM.findDOMNode(this)
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
    if(this.hasTimer) this.hasTimer = false
  },

  render: function() {
    return (
      <div className="react-component">
        {this.state.reactComponents || ''}
      </div>
    )
  }
});