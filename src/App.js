import "./App.css";
import Texteditor from "./components/texteditor";
import NavHeader from "./components/nav-head";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
    <Switch>
        <Route path='/login'>
        <Login
        headText='USER LOGIN'
        btnText='LOGIN'
        linkText='Forgot password?'
        register=''
         />
        </Route>
        <Route path='/register'>
        <Login 
          headText='REGISTER HERE'
          btnText='REGISTER'
          linkText='Already a user?'
          register='register'
        />
        </Route>
      <Route path='/'>
      <NavHeader />
      <Texteditor />
      </Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;
