import React, { Component } from 'react'
import { AccountData} from 'drizzle-react-components'
import logo from '../../logo.png'
import UploadFileIPFS from '../../components/UploadFileIPFS'

import FileTable from '../../components/FileTable'
import LoginForm from '../../components/LoginForm'
import ErrorBoundary from '../../components/ErrorBoundary'
class Home extends Component {
  render() {
    return (
    <ErrorBoundary>
      <section class="section">
        <div class="container">
          <h1 class="title">
            Getting started
          </h1>
          <p class="subtitle">
           File out Form and upload an image to decentralized <strong>IPFS</strong>!
          </p>
          <LoginForm {... this.props } />
          <hr />
          <UploadFileIPFS {... this.props } />
          

          <br/><br/>
        </div>

        <div class="container">
          <h2>Active Account</h2>
          <AccountData accountIndex="0" units="ether" precision="3" />

          <br/>
 
          <FileTable fileOwnerAddress ={this.props.accounts[0]} {... this.props} />
        </div>
  
        {/**
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
             <div>
               <p class="heading">Following</p>
               <p class="title">123</p>
             </div>
          </div>
          <div class="level-item has-text-centered">
             <div>
               <p class="heading">Followers</p>
               <p class="title">456K</p>
             </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        */}
      </section>
    </ErrorBoundary>
    )
  }
}

export default Home
