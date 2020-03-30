import React from "react";
import Skeleton from 'react-loading-skeleton';
import './styles/BadgeList.css'
import BadgeListItem from "./BadgeListItem";

class BadgesList extends React.Component {

    render() {
        return (
            <div className="BadgesList">
                <ul className="list-untyled">
                    {this.props.listBadges.map((badge) => {
                        return (
                            <BadgeListItem key={badge.id} badgeItem={badge} />
                        )
                    })}
                </ul>

            </div>
        );
    }
}


export default BadgesList