import React, { Component } from "react";
import "../create/create-error-page.css";

class CreateErrorPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      service: "",
      endpoint: "",
      id:"",
      mensaje:"",
      codigo:"",
      exists: true,
    };

    this.handleSubmitExistsId = this.handleSubmitExistsId.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event){
    this.setState({
        [event.target.name]:event.target.value
    })
}


  async handleSubmitExistsId(event) {
    console.log("Registro de entradas: "+ this.state.endpoint + " - "+ this.state.service  + " - "+ this.state.id);
    this.setState({ exists : false });
    console.log(this.state.exists);
    /*
    event.preventDefault();
    fetch("", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        service: this.state.service,
        endpoint: this.state.endpoint,
        id: this.state.id,
      }),
    }).catch((err) => {
      console.log("Ocurrio un error en la creacion del customer." + err);
    });
    */
  }

  render() {
    if(this.state.exists){
      return (
          
        <form className="form">
          <div className="title">Crear nuevo mensaje de error</div>
          <div className="subtitle">Primero, validemos si ya existe:</div>
  
          <div className="input-container ic1">
            <input className="input" name="service" placeholder=" "  onChange={this.handleFieldChange}/>
            <div className="cut"></div>
            <label className="placeholder">
              Service
            </label>
          </div>
  
          <div className="input-container ic2">
            <input className="input" name="endpoint" placeholder=" "  onChange={this.handleFieldChange}/>
            <div className="cut"></div>
            <label className="placeholder">
              Endpoint
            </label>
          </div>
          <div className="input-container ic2">
            <input className="input" name="id" placeholder=" " onChange={this.handleFieldChange}/>
            <div className="cut"></div>
            <label className="placeholder">
              Error id
            </label>
          </div>
          <button type="text" className="submit" onClick={this.handleSubmitExistsId}>
            Validar
          </button>
          <button type="text" className="back" >
            Volver
          </button>
        </form>
        
      );

    }else{
      return(
        <form  className="form">
          <div className="title">Crear nuevo mensaje de error</div>
          <div className="subtitle">Ingrese el mensaje y el codigo:</div>
          <div className="input-container ic1">
            <input className="input" name="service" placeholder=" " onChange={this.handleFieldChange}/>
            <div className="cut"></div>
            <label className="placeholder">
              Mensaje de error:
            </label>
          </div>
          <div className="input-container ic1">
            <input className="input" name="service" placeholder=" " onChange={this.handleFieldChange}/>
            <div className="cut"></div>
            <label className="placeholder">
              Codigo de error:
            </label>
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
