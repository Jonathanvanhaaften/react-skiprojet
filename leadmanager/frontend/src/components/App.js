import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './layout/header';
import Dashboard from './leads/Dashboard'

class App extends Component{
    render(){
        return (
        <Fragment>
            <Header />
            <Dashboard />
            <h1>This App</h1>
        </Fragment>
        )
    }
};

ReactDom.render(<App />, document.getElementById('app'));