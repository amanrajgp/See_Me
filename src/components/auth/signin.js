import React, { Component } from 'react'
import {connect} from "react-redux";
import { signin } from '../../store/actions/authaction';

class Signin extends Component {
    state={
        email:"",
        password:""

    }
    handlechange=(e)=>{
       this.setState({
           [e.target.id]:e.target.value
       });
    }
    handlesubmit=(e)=>{
       e.preventDefault();
       this.props.signin(this.state);
    }
  render() {
      const {authError}=this.props;
    return (
      <div className="container">
          <form onSubmit={this.handlesubmit} className="white">
              <h5 className="grey-text text-darken-3">Sign-in</h5>
              <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handlechange}/>
              </div>
              <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={this.handlechange}/>
              </div>
              <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0">Login</button>
                  <div classname="red-text center">
                     {
                         authError? <p>{authError}</p>:null
                     }
                  </div>
              </div>
          </form>
      </div>
    )
  }
}
const mapstatetoprops=(state)=>{
    return {
        authError:state.auth.authError
    }
}
const mapdispatchtoprops=(dispatch)=>{
    return {
        signin:(creds)=>dispatch(signin(creds))
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Signin);