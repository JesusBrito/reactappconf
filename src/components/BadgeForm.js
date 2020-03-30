import React from "react";

class BadgeForm extends React.Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };

  handleClick = e => {
    console.log(e);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div>
        <h1>Nuevo Registro</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Nombre</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              type="text"
              name="firstName"
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
