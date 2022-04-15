import React from "react";
import { Control, Errors } from "react-redux-form";
import { Label, Button } from "reactstrap";
import "./RegistrationComponent.css"

const validEmail = (val) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(val)
const validPassword = (val) => /^[A-Za-z0-9._%+-?@!]+$/.test(val)
const minLength = (len) => (val) => !(val) || (val.length >= len)

export default class Registration extends React.Component {

    constructor(props){
        super(props)
        this.loginHandler = this.loginHandler.bind(this)
    }

    loginHandler = () => {
        const login = document.getElementById("login").value
        const password = document.getElementById("password").value
        if(!validEmail(login) || !validPassword(password) || !minLength(8)(password) || !minLength(3)(login)){
            return
        } else {
            this.props.onLoginClicked({login: login, password: password})
        }

    }

    render(){
        return(
            <React.Fragment>
                <div id="background">
                    <img className="stretch" src="/assets/images/IMG_20210312_140957_174.png" alt="Фотка"/>
                </div>

                <div id="background-shader"/>
    
                <div className="login-modal">
                    <h1 className="login-modal-header">
                        Simple Hotel Check
                    </h1>
                    <div className="login-modal-form">
                        <div className="login-modal-form-item">
                            <Label htmlFor="login" className="zero-margin">Логин</Label>
                            <Control.text className="form-control" model=".login" id="login"
                                    name='login'
                                    validators={{minLength: minLength(3), validEmail: validEmail}}/>
                            <Errors
                                className='text-danger'
                                model=".login"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    validEmail: 'Must be an email'
                                }}
                            />
                        </div>
                        <div className="login-modal-form-item">
                            <Label htmlFor="password" className="zero-margin">Пароль</Label>
                            <Control.text className="form-control" model=".password" id="password"
                                    name='password'
                                    type="password"
                                    validators={{minLength: minLength(8), validPassword: validPassword}}/>
                            <Errors
                                className='text-danger'
                                model=".password"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 8 characters',
                                    validPassword: 'Must not contain letters А-Я or а-я'
                                }}
                            />
                        </div>
                    </div>
                    <Button className="login-modal-button" onClick={this.loginHandler}>Войти</Button>
                </div>
            </React.Fragment>
        )
    }
}