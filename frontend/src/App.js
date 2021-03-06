import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <div className="card card-container">
           <p id="profile-name" className="profile-name-card"></p>
           <form className="form-signin">
               <span id="reauth-email" className="reauth-email"></span>
               <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
               <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
               <div id="remember" className="checkbox">
                   <label>
                       <input type="checkbox" value="remember-me"/> Remember me
                   </label>
               </div>
               <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
           </form>
           <a href="#" className="forgot-password">
               Forgot the password?
           </a>
       </div>
     </div>
    );
  }
}

export default App;
