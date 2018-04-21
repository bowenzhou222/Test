import React from 'react';
import { connect } from 'react-redux';
import spinner from '../../assets/images/spinner.png';
import {register, login} from './login_actions';


const mapStateToProps = ({ loginReducer }) => ({
    user: loginReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
    register: (payload, success, fail) => dispatch(register(payload, success, fail)),    
    login: (payload, success, fail) => dispatch(login(payload, success, fail)),
});

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginFormOpen: false,
            isRegisterFormOpen: false,
            email: '',
            password: '',
            loginButtonClicked: false,
            loginError: null,
            registerButtonClicked: false,
            registerError: null,
        };

        this.openLoginForm = this.openLoginForm.bind(this);
        this.closeLoginForm = this.closeLoginForm.bind(this);
        this.openRegisterForm = this.openRegisterForm.bind(this);
        this.closeRegisterForm = this.closeRegisterForm.bind(this);        
        this.updateField = this.updateField.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    openLoginForm() {
        this.setState({ isLoginFormOpen: true });
    }

    closeLoginForm() {
        this.setState({
            isLoginFormOpen: false,
            loginError: null,
        });
    }

    openRegisterForm() {
        this.setState({ isRegisterFormOpen: true });
    }

    closeRegisterForm() {
        this.setState({
            isRegisterFormOpen: false,
            registerError: null,
        });
    }

    updateField(field, value) {
        this.setState({
            [field]: value,
        });
    }

    login() {
        const { login } = this.props;
        const { email, password } = this.state;
        this.setState({ loginButtonClicked: true });
        login(
            { email, password },
            () => {
                this.setState({ loginButtonClicked: false });
            },
            (apiError) => {
                this.setState({
                    loginButtonClicked: false,
                    loginError: apiError,
                });        
            }
        );
    }

    register() {
        const { register } = this.props;
        const { email, password } = this.state;
        this.setState({ registerButtonClicked: true });
        register(
            { email: email.trim(), password: password.toString() },
            () => {
                this.setState({
                    registerButtonClicked: false,
                    isRegisterFormOpen: false,                
                });
            },
            (apiError) => {
                this.setState({
                    registerButtonClicked: false,
                    registerError: apiError,
                });        
            }
        );
    }

    render() {
        const {
            isLoginFormOpen, isRegisterFormOpen, email, password, loginError,
            loginButtonClicked, registerError, registerButtonClicked,
        } = this.state;

        const { user } = this.props;
        return (
            <div className="login-container">
                {
                    user && user.email ?
                    <div>   
                        <a onClick={null}>
                            Click here to view the emails sent from {user.email}
                        </a>
                    </div>
                    :
                    <div>
                        <a onClick={this.openRegisterForm}>
                            Register&nbsp;
                        </a>
                        or &nbsp;
                        <a onClick={this.openLoginForm}>
                            Login&nbsp;
                        </a>
                        to view the emails you have sent.
                    </div>
                }
                {
                    (isLoginFormOpen || isRegisterFormOpen) &&
                    <div className="login-form">
                        <div className="login-input-wrapper">
                            <div className="close-modal-button-wrapper">
                                <div className="close-modal-button" onClick={isLoginFormOpen ? this.closeLoginForm : this.closeRegisterForm}>
                                    Close
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <label htmlFor="email">Email</label>
                                <input id="email" value={email} onChange={(e) => this.updateField('email', e.target.value)} />
                            </div>
                            <div className="col-sm-12">
                                <label htmlFor="password">Password</label>                            
                                <input id="password" value={password} onChange={(e) => this.updateField('password', e.target.value)} />
                            </div>
                            <div className="action-button-wrapper col-sm-12">
                                <button disabled={loginButtonClicked || registerButtonClicked} className="action-button" onClick={isLoginFormOpen ? this.login : this.register}>
                                    {isLoginFormOpen ? 'Log in' : 'Register'}
                                    <img src={loginButtonClicked || registerButtonClicked ? spinner : null} className={loginButtonClicked || registerButtonClicked ? 'show-spinner' : ''}/>
                                </button>
                            </div>
                            {
                                loginError &&
                                <div className="error-message">
                                    {loginError}
                                </div>
                            }
                            {
                                registerError &&
                                <div className="error-message">
                                    {registerError}
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
