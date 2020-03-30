import React from "react";
import Hero from "../components/Hero";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from '../api'
class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    };

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await api.badges.create(this.state.form)
        }catch (e) {
            console.log(e)
        }
    };

    render() {
        return (
            <React.Fragment>
                <Hero/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Badge
                                firstName={this.state.form.firstName || "FIRST_NAME"}
                                lastName={this.state.form.lastName || "LAST_NAME"}
                                job={this.state.form.jobTitle || "JOB_TITLE"}
                                twitter={this.state.form.twitter || "TWITTER"}
                                email={this.state.form.email}
                            />
                        </div>
                        <div className="col-md-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
