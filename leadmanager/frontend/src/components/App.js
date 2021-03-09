import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './layout/header';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts'
import { Provider } from 'react-redux';
import store from '../store';


//  Alert Oprions
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <Dashboard />
                        <h1>This App</h1>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
};

ReactDom.render(<App />, document.getElementById('app'));