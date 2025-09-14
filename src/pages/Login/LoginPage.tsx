import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from '../../features/api/authApiSlice';
import { registerUser, loginUser } from '../../features/user/userSlice';

// components
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

// extras
import {
  FlexContainer,
  FormActions,
  FormContainer,
  LoginPageContainer,
} from './LoginPage.styles';

interface ISignUpDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [signUpDetails, setSignUpDetails] = useState<ISignUpDetails>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [registerUserRequest, { isLoading: registerLoading }] =
    useRegisterUserMutation();
  const [loginUserRequest, { isLoading: loginLoading }] =
    useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setSignUpDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } =
      signUpDetails;

    try {
      if (isSignUp) {
        if (
          !firstName.trim() ||
          !lastName.trim() ||
          !email.trim() ||
          !password.trim() ||
          !confirmPassword.trim()
        ) {
          alert('Please fill in all values');
          return;
        }

        if (password !== confirmPassword) {
          alert('Passwords must match');
          return;
        }

        const { user } = await registerUserRequest({
          firstName,
          lastName,
          email,
          password,
        }).unwrap();

        dispatch(registerUser(user));

        navigate('/');
      } else {
        if (!email.trim() || !password.trim()) {
          alert('Please fill in all values');
          return;
        }

        const { user } = await loginUserRequest({ email, password }).unwrap();

        dispatch(loginUser(user));

        navigate('/');
      }

      setSignUpDetails({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  }

  return (
    <LoginPageContainer>
      <h3 className='title'>Job Board</h3>
      <FormContainer onSubmit={handleSubmit}>
        {isSignUp && (
          <FlexContainer>
            <Input
              type='text'
              label='First Name'
              name='firstName'
              value={signUpDetails.firstName}
              placeholder='First Name'
              onChange={handleOnChange}
            />
            <Input
              type='text'
              label='Last Name'
              name='lastName'
              value={signUpDetails.lastName}
              placeholder='Last Name'
              onChange={handleOnChange}
            />
          </FlexContainer>
        )}
        <Input
          type='email'
          label='Email'
          name='email'
          value={signUpDetails.email}
          placeholder='Email'
          onChange={handleOnChange}
        />
        <Input
          type='password'
          label='Password'
          name='password'
          value={signUpDetails.password}
          placeholder='Password'
          onChange={handleOnChange}
        />
        {isSignUp && (
          <Input
            type='password'
            label='Confirm Password'
            name='confirmPassword'
            value={signUpDetails.confirmPassword}
            placeholder='Confirm Password'
            onChange={handleOnChange}
          />
        )}
        <Button type='submit' variant='primary' size='large'>
          {registerLoading || loginLoading
            ? 'Loading...'
            : `Sign ${isSignUp ? 'Up' : 'In'}`}
        </Button>
      </FormContainer>
      <FormActions className='form-actions'>
        <p>{isSignUp ? 'Already' : "Don't"} have an account?</p>
        <div className='button'>
          <Button
            type='button'
            variant='text'
            onClick={() => setIsSignUp(!isSignUp)}
          >
            Sign {isSignUp ? 'In' : 'Up'}
          </Button>
        </div>
      </FormActions>
    </LoginPageContainer>
  );
}

export default LoginPage;
