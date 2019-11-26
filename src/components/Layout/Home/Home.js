import React, {Component} from 'react';
import  cognitoUtils from "../../../lib/cognitoUtils";
import { connect } from "react-redux";;

class Home extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.isLoggedIn?
                (<div>
                    <p>You are login as ....</p>
                    <a href="" onClick={this.onSignOut}>CLick here to Sign out</a>
                </div>):
                (<div>
                    <p>You are not logged in</p>
                    <a href={cognitoUtils.getCongitoSignInUri()}>Sign in</a>
                </div>)}
            </div>
        )
    }

    onSignOut(e){
        e.preventDefault();
        cognitoUtils.signOutCognitoSession();
    }
}

const mapStateToProps=(state)=>(
    {
    isLoggedIn: state.Session.isLoggedIn
    }
)

export default connect(mapStateToProps)(Home);