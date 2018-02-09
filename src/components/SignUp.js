import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () =>
	<div>
		<h1>sign up</h1>
		<SignUpForm />
  	</div>


const INITIAL_STATE = {
  	username: '',
  	email: '',
  	passwordOne: '',
  	passwordTwo: '',
  	error: null,
};




class SignUpForm extends Component {
	constructor(props) {
    	super(props);

    	this.state = { ...INITIAL_STATE };
  	}

  	onSubmit = (event) => {

  	}

  	render() {
    	return (
      		<form onSubmit={this.onSubmit}>

      		</form>
    	);
  	}
}

const SignUpLink = () =>
  	<p>
    	Don't have an account?
    	{' '}
    	<Link to={routes.SIGN_UP}>Sign Up</Link>
  	</p>

export default SignUpPage;

export {
  SignUpForm,
  SignUpLink,
};
	

export default SignUp
