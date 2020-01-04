import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route />
                    <div className="container">Hello</div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, { fetchUser })(App);
