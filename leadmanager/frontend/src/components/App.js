import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './layout/header';

import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component{
    render(){
        return (
            <Provider store={store}>
            <Fragment>
                <Header />
                <Dashboard />
                <h1>This App</h1>
            </Fragment>
        </Provider>
        )
    }
};

ReactDom.render(<App />, document.getElementById('app'));