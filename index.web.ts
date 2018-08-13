import App from './App';
require("!style-loader!css-loader!./src/App.css");
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';


// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('react-app')
});
