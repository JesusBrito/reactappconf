import React from "react";

class BadgeForm extends React.Component {
    render() {
        return (
            <div>
                <h1>Nuevo Registro</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Nombre</label>
                        <input
                            className="form-control"
                            onChange={this.props.onChange}
                            type="text"
                            name="firstName"
                            required={true}
                            value={this.props.formValues.firstName}
                        />
                        <label htmlFor="">Apellido</label>
                        <input
                            className="form-control"
                            onChange={this.props.onChange}
                            type="text"
                            name="lastName"
                            required={true}
                            value={this.props.formValues.lastName}
                        />
                        <label htmlFor="">Email</label>
                        <input
                            className="form-control"
                            onChange={this.props.onChange}
                            type="email"
                            name="email"
                            required={true}
                            value={this.props.formValues.email}
                        />
                        <label htmlFor="">Job</label>
                        <input
                            className="form-control"
                            onChange={this.props.onChange}
                            type="text"
                            name="jobTitle"
                            required={true}
                            value={this.props.formValues.job}
                        />
                        <label htmlFor="">Twitter</label>
                        <input
                            className="form-control"
                            onChange={this.props.onChange}
                            type="text"
                            name="twitter"
                            required={true}
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
