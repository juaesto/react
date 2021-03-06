import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { startAction } from './actions/startAction';
import { stopAction } from "./actions/stopAction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={
              "App-logo" +
              (this.props.rotating ? "" : " App-logo-paused")
            }
            alt="logo"
            onClick={
              this.props.rotating ?
                this.props.stopAction : this.props.startAction
            }
            style={{ "pointer-events": "all" }}
          />
        </header>
      </div>
    );
  }
}

//Recupera el estado del store
const mapStateToProps = state => ({
  ...state
});

//Recupera las acciones y las envía al store
const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
