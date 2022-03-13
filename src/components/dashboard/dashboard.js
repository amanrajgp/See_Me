import React, { Component } from "react";
import Projectlist from "../projects/projectlist";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

class Dashboard extends Component{
    render(){
        const {projects}=this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Projectlist projects={projects}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStatetoprops=(state)=>{
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,

    }
}
export default  compose(
    firestoreConnect(() => ['projects']),
    connect(mapStatetoprops)
    )(Dashboard)