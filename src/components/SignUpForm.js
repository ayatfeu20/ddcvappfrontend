import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import '@djthoms/pretty-checkbox';
import logo from '../images/DigiDiv.jpeg';
import UserServices from './UserServices';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
const SignUpForm = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [employeename, setemployeename] = useState('');
  const [lastname, setlastname] = useState('');
  const [password, setpassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
      employeename: firstname + ' ' + lastname,
    };
     if(firstname === '' || lastname === '' || email === '' || password === ''){
      setErrorMessage('Please fill all fileds')
    } else if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
      setErrorMessage('Invalid Email address')
    } 
    else

    UserServices.handlesignup(data)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('isadmin', JSON.stringify(res.data.user.isadmin));
        navigate('../employee/' + res.data.user._id + '/edit', {
          replace: true,
        });
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.message);
      });
  };

  return (
    <div className='login align-items-center d-flex justify-content-center container'>
      <div className='wide card border-0 box-shadow'>
        <FadeIn>
          <div className='m-5'>
            <div className='mb-5 d-flex justify-content-center'>
              <img
                src={logo}
                className='logo-big'
                alt='Digital Dividend Logo'
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className='inputField mb-3 d-flex justify-content-center'>
                <input
                  name='firstname'
                  type='firstname'
                  value={firstname}
                  className='-width input-style form-control'
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                  placeholder=' '
                />
                <span className=' Input'>FirstName</span>
              </div>
              <div className='inputField mb-3 d-flex justify-content-center'>
                <input
                  name='lastname'
                  type='lastname'
                  value={lastname}
                  className='-width input-style form-control'
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                  placeholder=' '
                />
                <span className=' Input'>Lastname</span>
              </div>

              <div className='inputField mb-3 d-flex justify-content-center'>
                <input
                  name='email'
                  type='email'
                  value={email}
                  className='-width input-style form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder=' '
                />
                <span className='emailInput Input'>E-mail</span>
              </div>

              <div className='mb-3'>
                <div className='inputField  d-flex justify-content-center'>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    className='login-text input-style form-control -width'
                    id='exampleInputPassword1'
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    placeholder=' '
                  />
                  <span className='passwordInput Input'>Password</span>
                </div>
              </div>

              {errorMessage && (
                <div className='errorBox'>
                  <small className='ps-1 incorrect-text'>{errorMessage}</small>
                </div>
              )}

              <button
                type='submit'
                className='p-3 login-text btn-color btn -width btn-primary'
              >
                Sign up
              </button>
              <div className='mt-2 d-flex justify-content-center'>
                <small className='not-member'>
                  Aleady have an account?{' '}
                  <Link
                    to='/'
                    className='font-medium text-purple-600 hover:text-purple-500'
                  >
                    <span className='pointer signup-link'>Log in here</span>
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default SignUpForm;
