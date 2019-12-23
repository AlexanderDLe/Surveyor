import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import Header from './Header';

const Dashboard = () => <div className="">Dashboard</div>;
const Landing = () => <div className="">Landing</div>;
const SurveyNew = () => <div className="">New Survey</div>;

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route
                            exact
                            path="/surveys/new"
                            component={SurveyNew}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, { fetchUser })(App);
