import React, { Component } from "react";
import "../create/create-error-page.css";

class CreateErrorPage extends Component {
  render() {
    return (
      <div class="form">
        <div class="title">Crear nuevo mensaje de error</div>
        <div class="subtitle">Ingrese los siguientes campos obligatorios:</div>

        <div class="input-container ic1">
          <input id="Service" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="Service" class="placeholder">
            Service
          </label>
        </div>

        <div class="input-container ic2">
          <input id="endpoint" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="endpoint" class="placeholder">
            Endpoint
          </label>
        </div>
        <div class="input-container ic2">
          <input id="Error id" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="Error id" class="placeholder">
            Error id
          </label>
        </div>
        <button type="text" class="submit">
          Crear!
        </button>
      </div>
    );
  }
}

export default CreateErrorPage;
