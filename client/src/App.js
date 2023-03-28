import './App.css';
import { Route, Switch} from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage.js";
import Home from "./components/home/Home.js";
import CreateDog from "./components/createDog/CreateDog.js";
import DogDetail from "./components/dogDetail/DogDetail.js";
import Error from './components/error/Error';


function App() {
  return (

     <div className="App">
      <Switch>
         <Route exact path={"/"} component={LandingPage}/>
         <Route exact path={"/home"} component={Home}/>
         <Route exact path={"/home/:id"} component={DogDetail}/>
         <Route exact path={"/create"} component={CreateDog}/>
         <Route path={"*"} component={Error}/>
      </Switch>
     </div>

  );
}

export default App;
