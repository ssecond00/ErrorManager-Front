import React, { Component } from "react";
import "../create/create-error-page.css";

class CreateErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existsError: true,
      service: "",
      endpoint: "",
      id: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { service, endpoint, id } = this.state;
    await fetch(
      `http://localhost:8080/error/exists-error/${service}/${endpoint}/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ existsError: data.exists });
        if(data.exists){
          window.alert("El codigo ingresado ya existe!");
        }
    })
      .catch((error) => console.error(error));
    
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { existsError, service, endpoint, id } = this.state;
    let page;
    existsError ? 
    page = (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="title">Crear nuevo mensaje de error</div>
          <div className="subtitle">Primero, validemos si ya existe:</div>
          <div className="input-container ic1">
            <input
              className="input"
              placeholder=" "
              type="text"
              name="service"
              value={service}
              onChange={this.handleChange}
            />
            <div className="cut"></div>
            <label className="placeholder">Service</label>
          </div>
          <div className="input-container ic2">
            <input
              className="input"
              placeholder=" "
              type="text"
              name="endpoint"
              value={endpoint}
              onChange={this.handleChange}
            />
            <div className="cut"></div>
            <label className="placeholder">Endpoint</label>
          </div>
          <div className="input-container ic2">
            <input
              className="input"
              placeholder=" "
              type="text"
              name="id"
              value={id}
              onChange={this.handleChange}
            />
            <div className="cut"></div>
            <label className="placeholder">Error id</label>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
          <button type="text" className="back">
            Volver
          </button>
        </form>
      </div>
    )
    :
    page = (
    <form className="form" onSubmit={this.handleSubmit}>
      <div className="title">Crear nuevo mensaje de error</div>
      <div className="subtitle">Para el id: {service}.{endpoint}.{id}</div>
      <div className="input-container ic1">
        <input className="input" name="mensaje" placeholder=" "  />
        <div className="cut"></div>
        <label className="placeholder">mensaje</label>
      </div>
      <div className="input-container ic1">
        <input className="input" name="codigo" placeholder=" "  />
        <div className="cut"></div>
        <label className="placeholder">codigo</label>
      </div>
      <button type="text" className="submit">
        Validar
      </button>
      <button onClick={this.handleLoginClick} type="text" className="back">
        Volver
      </button>
    </form>
    );

    return (
      <div>{page}</div> 
    );
  }
}

export default CreateErrorPage;
