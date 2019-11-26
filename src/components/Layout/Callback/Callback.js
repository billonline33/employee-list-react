import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { initSessionFromCallbackURI } from '../../../reducers/session';

class Callback extends Component {
    componentDidMount(){
        console.log("callback componentDidMount");
        debugger;
        if (this.props.location.hash || this.props.location.search) {
            this.props.initSessionFromCallbackURI(window.location.href)
          }
    }

    render(){
        debugger;
        if ((!this.props.location.hash && !this.props.location.search) || this.props.session.isLoggedIn) {
            return <Redirect to="/main" />
          }

        return <div>Call back page!</div>
    }
}

const mapStateToProps=(state)=>({
    session: state.Session
})

const mapDispatchToProps=(dispatch)=>{
    return {initSessionFromCallbackURI: href => dispatch(initSessionFromCallbackURI(href))}
}

export default connect(mapStateToProps,mapDispatchToProps)(Callback);