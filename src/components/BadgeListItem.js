import React from "react";
import './styles/BadgeListItem.css'
import Gravatar from "./Gravatar";

class BadgeListItem extends React.Component{

    render() {
        return(
            <li className="BadgesListItem">
                <div className="Badge__section-name">
                    <Gravatar className="Badge__avatar" email={this.props.badgeItem.email}/>
                </div>
                <div >
                    <p className="text-card-name">{this.props.badgeItem.firstName} {this.props.badgeItem.lastName}</p>
                    <p className="text-card-twitter">{this.props.badgeItem.twitter}</p>
                    <p className="text-card-job">{this.props.badgeItem.jobTitle}</p>
                </div>
            </li>
        );
    }
}


export default BadgeListItem