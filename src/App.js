import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => ( params[key] ? `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}` : ''));
  return queryItems.join('&');
}
class App extends Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    const client_id = 'K3JLT3HH0JYERCWAZQYHLHKFMX4JFM5VQ4FXUOOLUQIRWPZ2';
    // const client_secret = 'NKTAY0IR52WOKLSWDY32SR5AYVKG2RAQIEZK3NENASVTAB44';
    const client_secret = config.API_KEY; 
    const params = {
      near:  'waco, tx',
      client_id: client_id,
      client_secret: client_secret,
      v: '20200514',
    };
    const foursquareVenueURL = 'https://api.foursquare.com/v2/venues/search';
    const queryString = formatQueryParams(params);
    const url = foursquareVenueURL + '?' + queryString;
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => this.setState({loaded: true}))
    .catch(err => {
      alert('error')
    });
  }
  render(){
  return (
    <div className="App">
      {this.state.loaded ? <p>ok</p> : <p>loaded</p>}
    </div>
  );
  }
}

export default App;
