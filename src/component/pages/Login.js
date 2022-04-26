import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username !== 'admin') {
            document.getElementById('username').innerHTML = 'Please Enter A Valid Username';
        } else if (this.state.password !== 'admin') {
            document.getElementById('username').innerHTML = 'Please Enter A Valid Password';
        } else {
            this.props.history.push('/home');
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='py-4'>
                    <h3><b>Login Page...</b></h3>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <input type="text" class="form-control"
                                name='username'
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control"
                                name='password'
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                placeholder="Password" />
                        </div>
                        <p style={{ color: 'red' }} id='username'></p>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
