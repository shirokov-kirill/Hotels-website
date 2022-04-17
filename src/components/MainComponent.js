import { Component } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from 'react-redux'
import withRouter from '../redux/withRouter'
import { saveLoginInfo } from '../redux/ActionCreators';
import Registration from './RegistrationComponent'
import Hotels from './HotelsComponent';

const mapStateToProps = state => {
  return {
    firstAuthTrigger: state.authed
  }   
}

const mapDispatchToProps = (dispatch) => ({
  saveLoginInfo: (value) => {dispatch(saveLoginInfo(value))},
})

class Main extends Component {

  constructor(props){
    super(props)
    this.handleLoginInput = this.handleLoginInput.bind(this)
  }

  handleLoginInput(value) {
    console.log('guy')
    console.log(value)
    this.props.saveLoginInfo(value)
  }

  render(){
    console.log(sessionStorage.getItem('authed'))
    return (
      <div>
        <Routes>
            <Route path='/registration' element={(
                (sessionStorage.getItem('authed') === "true" && <Navigate to='/hotels' replace={true}/>) || <Registration onLoginClicked={this.handleLoginInput}/>
              )
            }/>

            <Route exact path='/hotels' element={(
              (sessionStorage.getItem('authed') === "true" && <Hotels handleOut={this.handleLoginInput}/>) || <Navigate to='/registration' replace={true}/>
            )
            }/>
            <Route path='*' element={(
              (sessionStorage.getItem('authed') === "true" && <Navigate to='/hotels' replace={true}/>) || <Navigate to='/registration' replace={true}/>
            )}/>
        </Routes>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));