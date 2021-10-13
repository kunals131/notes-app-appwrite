import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { currentUser } from "./appwrite/config.appwrite";
import SignIn from "./pages/signin.page";
import SignUp from "./pages/singup.page";
import LogoutPage from "./pages/logout/logout";
import { logoutUser } from "./appwrite/config.appwrite";
import { refreshPage } from "./utils/utils";
import NotesPage from "./pages/Mynotes/mynotes";
const Homepage = () => <h1>Hello home</h1>;

const Signin = () => <h1>Signin</h1>;

const Signup = () => <h1>Signup</h1>;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    currentUser().then(
      (response) => {
        console.log(response);
        this.setState(
          {
            user: response["name"],
          },
          () => console.log(this.state.user)
        );
      },
      (error) => {
        this.setState({
          user: null,
        });
      }
    );
  }

  handleLogout = ()=>{
    logoutUser().then(response=>{
      console.log(response);
      refreshPage();
    }, error=>{
      console.log(error);
    })
    
  }
  render() {
    return (
      <div>
        <Header user = {this.state.user}></Header>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.state.user !== null ? <NotesPage/> : <Redirect to= '/signin'/>
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.user !== null ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.state.user !== null ? <Redirect to="/" /> : <SignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
