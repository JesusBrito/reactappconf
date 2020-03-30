import React from "react";
import logo from "../images/badge_header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="Badge__section-name">
                    <img
                        className="Badge__avatar"
                        src={this.props.avatarURL}
                        alt="avatar"
                    />
                    <h1>
                        {this.props.firstName} <br/> {this.props.lastName}
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.job}</h3>
                    <div>{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">#conf</div>
            </div>
        );
    }
}

export default Badge;
