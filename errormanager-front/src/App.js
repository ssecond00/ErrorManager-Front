import { BrowserRouter, Route } from "react-router-dom";
import CreateErrorPage from "./components/create/create-error-page";
import LandingPage from "../src/components/landing/landing-page";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/CreateError" component={CreateErrorPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
