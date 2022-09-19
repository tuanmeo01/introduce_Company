import './App.css';
import Nav from './view/nav/Nav';
import Home from './view/home/Home';
import Hire from './view/hire/Hire';
import About from './view/about/About';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/hire">
            <Hire />
          </Route>
          <Route path="/about">
            < About/>
          </Route>
        </Switch>
      </header>
    </div>
  </BrowserRouter>
  );
}
export default App;
