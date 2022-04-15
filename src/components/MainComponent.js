import { Component } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from 'react-redux'
import withRouter from '../redux/withRouter'
import { saveLoginInfo } from '../redux/ActionCreators';
import Registration from './RegistrationComponent'
import Hotels from './HotelsComponent';

const mapStateToProps = state => {
  return {
    authed: state.authed
  }   
}

const mapDispatchToProps = (dispatch) => ({
  saveLoginInfo: (values) => {dispatch(saveLoginInfo(values))},
})

class Main extends Component {

  constructor(props){
    super(props)
    this.handleLoginInput = this.handleLoginInput.bind(this)
  }

  handleLoginInput(values) {
    this.props.saveLoginInfo(values)
  }

  render(){

    return (
      <div>
        <Routes>
            <Route path='/registration' element={(
                this.props.authed.authed && <Navigate to='/hotels' replace={true}/> || <Registration onLoginClicked={this.handleLoginInput}/>
              )
            }/>

            <Route exact path='/hotels' element={(
              this.props.authed.authed && <Hotels/> || <Navigate to='/registration' replace={true}/>
            )
            }/>
            <Route path='*' element={(
              this.props.authed.authed && <Navigate to='/hotels' replace={true}/> || <Navigate to='/registration' replace={true}/>
            )}/>
        </Routes>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));