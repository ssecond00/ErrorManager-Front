import { BrowserRouter, Route } from "react-router-dom";

import CreateErrorPage from "./components/create/create-error-page";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/create" component={CreateErrorPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
