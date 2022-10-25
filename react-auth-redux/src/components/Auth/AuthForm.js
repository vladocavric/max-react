import { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './AuthForm.module.css';
import { loginReq } from '../../store/auth-actions';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    dispatch(loginReq({email, password, isLogin}))
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required onChange={onEmailChangeHandler} value={email}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required autoComplete='on' onChange={onPasswordChangeHandler} value={password}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
