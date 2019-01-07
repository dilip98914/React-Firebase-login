import React, { Component } from 'react';
import fire from './config';


class Login extends Component {
  constructor(props){
  	super(props);
    this.state={
      email:'',
      password:'',
    }

    this.login=this.login.bind(this);
    this.signup=this.signup.bind(this);
    this.handleChange=this.handleChange.bind(this);


  }	

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,
      this.state.password).then((u)=>{
        console.log('logged in');
      }).catch(err=>{
        console.log(err);
      });
  }

  signup(e){
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email,
        this.state.password).then((u)=>{
          console.log('signed up');
        }).catch(err=>{
          console.log(err);
        });
    }



  render() {
    return (
      <div className='col-md-6'>
        <form>
          <div className='form-group'>
            <label for='inputemail'>Email address</label>
             <input value={this.state.email}
             onChange={this.handleChange}
             type='email'
             name='email'
             className='form-control'
             aria-describedby='emailHelp'
             placeholder='enter email'/>         
             <small id='emailHelp' 
             className="form-text text-muted">
             We will never share your email with anyone
             </small>
          </div>

          <div className='form-group'>
            <label for='inputPassword'>password</label>
             <input value={this.state.password}
             onChange={this.handleChange}
             type='password'
             name='password'
             className='form-control'
             placeholder='enter password'/>         
          </div>
          <button type='submit' 
          onClick={this.login}
          className="btn btn-primary">Login</button>

          <button type='submit' 
          onClick={this.signup}
          className="btn btn-success">Signup</button>


        </form>
      </div>
    );
  }
}

export default Login;
