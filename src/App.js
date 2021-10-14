import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { currentUser } from "./appwrite/config.appwrite";
import SignIn from "./pages/signin.page";
import SignUp from "./pages/singup.page";
import { logoutUser } from "./appwrite/config.appwrite";
import { refreshPage } from "./utils/utils";
import { Button } from "@mui/material";
import NotesPage from "./pages/Mynotes/mynotes";
import { categoriesOfUser } from "./appwrite/database.appwrite";
import CategoriesPage from "./pages/categories/categories";
import SpeedDialOption from "./components/SpeedDial/speedDial";
import { Speed } from "@mui/icons-material";
const Homepage = () => <h1>Hello home</h1>;


const Signin = () => <h1>Signin</h1>;

const Signup = () => <h1>Signup</h1>;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      categories: [],
      notes: [],
    };
  }

  componentDidMount() {
    currentUser().then(
      (response) => {
        console.log(response["$id"]);
        categoriesOfUser(response["$id"]).then((response) => {
          this.setState(
            {
              ...this.state,
              categories: response["documents"],
            },
            () => console.log(this.state.categories)
          );
        });
        this.setState(
          {
            ...this.state,
            user: response["$id"],
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

  handleLogout = () => {
    logoutUser().then(
      (response) => {
        console.log(response);
        refreshPage();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      <div>
        <Header user={this.state.user}></Header>
        <Switch>
          <Route
            exact
            path="/categories"
            render={() =>
              this.state.user !== null ? (
                <CategoriesPage categories={this.state.categories} />
              ) : (
                null
              )
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
          <Route
            exact
            path="/"
            render={() =>
              this.state.user !== null ? (
                <NotesPage categories={this.state.categories} />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
        </Switch>
        {
          (this.state.user!==null) ? <SpeedDialOption/> : null
        }
      </div>
    );
  }
}

export default App;
