import React, { Component } from "react";
import { connect } from 'react-redux';


import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  
  render() {
    fetchSmurfs();
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    smurfs:[],
    loading:state.loading,
    err: state.err
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.