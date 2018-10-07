import React, { Component } from 'react'
import { Route } from 'react-router'
import HomeContainer from './layouts/home/HomeContainer'
import NavContainer from './components/NavContainer'
import UploadFileIPFSContainer from './components/UploadFileIPFSContainer'
// Styles
//import './css/oswald.css'
//import './css/open-sans.css'
//import './css/pure-min.css'
import 'bulma/css/bulma.css'

//import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavContainer />
        <Route exact path="/" component={HomeContainer}/>
        <UploadFileIPFSContainer />
      </div>
    );
  }
}

export default App