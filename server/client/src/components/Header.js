import React from 'react';
import { connect } from 'react-redux';

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
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                );
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper container">
                    <a href="/" className="left brand-logo">
                        Surveyor
                    </a>
                    <ul className="right">
                        <li>{this.renderContent()}</li>
                    </ul>
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
