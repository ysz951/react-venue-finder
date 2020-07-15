import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';
import GoogleStreetview from './googleStreet';

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => ( params[key] ? `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}` : ''));
  return queryItems.join('&');
}

class App extends Component {
  state = {
    click: false,
  }
  handleClick(){
    this.setState({
      click: this.state.click ? false : true,
    })
  }
  // componentDidMount() {
    
  // }
  render(){
    const key = 'AIzaSyDal57aUyQAAoSUb82ptXKbH1X4M-iYu8I';
    // const show = this.state.click ? <p>Yes</p> : <p>No</p>
    const show = this.state.click ? <GoogleStreetview apiKey={key} /> : <p>No</p>
  return (
    <>
      {/* <GoogleStreetview apiKey={key} /> */}
      <button onClick = {() => this.handleClick()}>click</button>
      {show}
    </>
    // <div className="App">
    //   {this.state.loaded ? <p>ok</p> : <p>loaded</p>}
    // </div>
  );
  }
}

export default App;
