import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Log In With Google</a>
                    </li>
                );
            default:
                return [
                    <li key={1}>
                        <Payments />
                    </li>,
                    <li style={{ margin: '0 10px' }} key={2}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key={3}>
                        <a href="/api/logout">Logout</a>
                    </li>
                ];
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper container">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Surveyor
                    </Link>
                    <ul className="right">{this.renderContent()}</ul>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};

export default connect(mapStateToProps)(Header);
