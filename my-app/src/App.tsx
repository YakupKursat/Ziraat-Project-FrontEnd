import React from "react";
import "./deneme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import NotesPage from "./Pages/NotesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/notespage" component={NotesPage} />
        </Switch>
        <Footer />
      </main>
    );
  }
}
export default App;
