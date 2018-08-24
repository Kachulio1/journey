import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hello from "./js/components/container/Hello";

class App extends Component {
    render() {
        return <Hello / >
    }
}

ReactDOM.render( < App / > , document.getElementById('app'))