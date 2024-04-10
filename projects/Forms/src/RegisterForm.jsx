import React, { useState } from 'react';
import './App.css';

// Import your LoginForm component here
import LoginForm from './LoginForm';

function RegisterForm() {
  const [formDetails, setFormDetails] = useState({
    username: '',
    email: '',
    password: '',
    Dob:'',
    Doj:'',
  });
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    Dob:'',
    Doj:'',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); 
  };

  const submit = (e) => {
    e.preventDefault();
    if (formDetails.password.length < 6) {
      setFormErrors({
        ...formErrors,
        password: 'Please enter minimum 6 characters',
      });
      return; 
    }
    console.log(formDetails);
    setRegistrationSuccess(true);
  };

  return (
    <div>
      {!registrationSuccess ? (
        <div>
          <h1>Register Form</h1>
          <form
				className='myForm'
				onSubmit={submit}>
				<p>Username:<input
					type='text'
					name='username'
					id='un'
					placeholder='Enter the name'
					onChange={change}
				/></p>
				{formErrors.username && <p className='error'>{formErrors.username}</p>}
				<p>Email:
				<input
					type='email'
					name='email'
					id='em'
					placeholder='Enter the email'
					onChange={change}
				/></p>
				{formErrors.email && <p className='error'>{formErrors.email}</p>}
				<p>Password:
				<input
					type='password'
					name='password'
					id='pwd'
					placeholder='enter the password'
					onChange={change}
				/></p>
				{formErrors.password && <p className='error'>{formErrors.password}</p>}
				<p>Dob:
				<input
					type='date'
					name='Dob'
					id='Dob'
					placeholder='enter the Dob'
					onChange={change}
				/></p>
                <p>Doj:
				<input
					type='date'
					name='Doj'
					id='Doj'
					placeholder='enter the Doj'
					onChange={change}
				/></p>
				<button type='submit'>Submit</button>
			</form>
        </div>
      ) : (
        <div>
          
          <LoginForm />
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
