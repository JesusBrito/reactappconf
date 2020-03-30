import React from "react";
import BadgesList from "../components/BadgesList";
import './styles/Badges.css'
import confHeader from '../images/badge_header.svg'
import {Link} from 'react-router-dom';
import api from '../api'
class Badges extends React.Component {


    constructor(props) {
        super(props);
        console.log("1 en ejecutarse Constructor");
        this.state = {
            loading: true,
            error: false,
            data: []
        };
    }

    componentDidMount() {
        console.log("3 en ejecutarse Did Mount");
        this.fetchInfo()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("5 en ejecutarse Update");
        console.log({
            prevProps,
            prevState,
        })
    }

    componentWillUnmount() {
        console.log("6 en ejecutarse Unmount");
    }

    render() {
        console.log("2/4 en ejecutarse Render");
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero container-fluid">
                        <div className="Bagdes__container">
                            <img src={confHeader} className="Badges_conf-logo" alt="logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">Nuevo registro</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList listBadges={this.state.data}/>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons_control">
                        <div className="">
                            <button onClick={this.fetchInfo} className="btn btn-primary">Cargar más</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    fetchInfo = async () => {
        this.setState({
            loading:true,
            error: false
        });
        try{
            const data = await api.badges.list();
            this.setState({
                loading:false,
                error: false,
                data: data
            });

            console.log(this.state.data);
        }catch (e) {
            this.setState({
                loading:false,
                error: true
            });
            console.log(e)
        }
    }
}

export default Badges