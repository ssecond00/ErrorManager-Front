import React, { Component } from "react";
import "../create/create-error-page.css";
import { existsError } from "../../backend api/api-controller";

class CreateErrorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      service: "",
      endpoint: "",
      id: "",
      mensaje: "",
      codigo: "",
      exists: true,
    };

    this.handleSubmitExistsId = this.handleSubmitExistsId.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmitExistsId() {
    console.log(
      "Registro de entradas: " +
        this.state.endpoint +
        " - " +
        this.state.service +
        " - " +
        this.state.id
    );
    const existsResponse = await existsError(
      this.state.service,
      this.state.endpoint,
      this.state.id
    );

    console.log(existsResponse);
    if (existsResponse.rdo === 0) {
      if (!existsResponse.existsError) {
        console.log(existsResponse.existsError);
        this.setState({ exists : false })

        //  No setea el estado en false. linea 47.

        window.alert("xd ")

      }else{
        window.alert("El id ingresado ya se encuentra registrado!")
      }
    } else {
      console.log("f");
    }
  }

  render() {
    if (this.state.exists) {
      return (
        <form className="form" onSubmit={this.handleSubmitExistsId}>
          <div className="title">Crear nuevo mensaje de error</div>
          <div className="subtitle">Primero, validemos si ya existe:</div>

          <div className="input-container ic1">
            <input
              className="input"
              name="service"
              placeholder=" "
              onChange={this.handleFieldChange}
            />
            <div className="cut"></div>
            <label className="placeholder">Service</label>
          </div>

          <div className="input-container ic2">
            <input
              className="input"
              name="endpoint"
              placeholder=" "
              onChange={this.handleFieldChange}
            />
            <div className="cut"></div>
            <label className="placeholder">Endpoint</label>
          </div>
          <div className="input-container ic2">
            <input
              className="input"
              name="id"
              placeholder=" "
              onChange={this.handleFieldChange}
            />
            <div className="cut"></div>
            <label className="placeholder">Error id</label>
          </div>
          <button type="text" className="submit">
            Validar
          </button>
          <button type="text" className="back">
            Volver
          </button>
        </form>
      );
    } else {
      return (
        <form className="form">
          <div className="title">Crear nuevo mensaje de error</div>
          <div className="subtitle">Ingrese el mensaje y el codigo:</div>
          <div className="input-container ic1">
            <input
              className="input"
              name="service"
              placeholder=" "
              onChange={this.handleFieldChange}
            />
            <div className="cut"></div>
            <label className="placeholder">Mensaje:</label>
          </div>
          <div className="input-container ic1">
            <input
              className="input"
              name="service"
              placeholder=" "
              onChange={this.handleFieldChange}
            />
            <div className="cut"></div>
            <label className="placeholder">Codigo:</label>
          </div>
          <button type="text" className="submit">
            Volver
          </button>
        </form>
      );
    }
  }
}

export default CreateErrorPage;
