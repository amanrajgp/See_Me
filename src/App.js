import React, {Component} from "react";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";
import Projectdetails from "./components/projects/projectdetails";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import Createproject from "./components/projects/createprojects";

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/project/:id' element={<Projectdetails/>} />
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/create" element={<Createproject/>}/>

          </Routes>
          
        </div>
      </BrowserRouter>
      
    );
  }
  
  }
  
export default App;
