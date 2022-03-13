import React, { Component } from 'react'
import {connect} from "react-redux";
import { createproject } from '../../store/actions/projectactions';

class Createproject extends Component {
    state={
        name: '',
        age: '',
        dob:" ",
        email:"",
        address:"",
        phone:"",
        password:"",

    }
    handlechange=(e)=>{
       this.setState({
           [e.target.id]:e.target.value
       });
    }
    handlesubmit=(e)=>{
       e.preventDefault();
       this.props.createProject(this.state)
    }
  render() {
    return (
        <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add Profile</h5>
          <div className="input-field">
            <input type="text" id='image' onChange={this.handlechange} />
            <label htmlFor="image">Profile Image Link</label>
          </div>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handlechange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" id='age' onChange={this.handlechange} />
            <label htmlFor="age">Age</label>
          </div>
          <div className="input-field">
            <input type="text" id='dob' onChange={this.handlechange} />
            <label htmlFor="dob">Date of Birth</label>
          </div>
          <div className="input-field">
            <input type="email" id='email' onChange={this.handlechange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="text" id='address' onChange={this.handlechange} />
            <label htmlFor="address">Address</label>
          </div>
          <div className="input-field">
            <input type="text" id='phone' onChange={this.handlechange} />
            <label htmlFor="phone">Phone No.</label>
          </div>
          <div className="input-field">
            <input type="text" id='password' onChange={this.handlechange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1" onClick={this.handlesubmit}>Create</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapdispatchtoprops=(dispatch)=>{
    return {
        createProject:(project)=>dispatch(createproject(project))
    }
}
export default connect(null,mapdispatchtoprops)(Createproject);