import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './layout/header';


class App extends Component{
    render(){
        return (
        <div>
            <Header />
            <h1>This App</h1>
        </div>
        )
    }
};

ReactDom.render(<App />, document.getElementById('app'));