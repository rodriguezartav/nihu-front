import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { AppContainer } from 'react-hot-loader';

const render = (Component) => {

  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>

   , document.getElementById('root')
  );
};


render(App);

if (module.hot){
  module.hot.accept('./app', () => {
    render(App);
  })
}

window.requireLazy = function(path, callback){
  import(/* webpackChunkName: "custom" */ '../../custom/' + path ).then(Renderer => {
    callback(Renderer.default);
  }).catch(error => 'An error occurred while loading the component');
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
