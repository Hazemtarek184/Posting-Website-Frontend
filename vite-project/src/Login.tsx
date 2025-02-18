import { useState } from 'react';
import axios from 'axios';
import './style.css';
import ApiConstants from './app_constants';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  }

  const loginRequest = async () => {

    if (!username || !password) {
      setMessage("Add Your Information");
      return;
    }

    const payload = { username, password };

    const response = await axios.post(
      `${ApiConstants.baseUrl}${ApiConstants.loginPrefix}`,
      payload
    ).then(
      (res) => {
        
      }
    ).catch(
      (err) => {

      }
    )
  }

  return (
    <>
      <div className='background'>
        <div className='login'>
          <h1 className='baldfont' style={{ textAlign: 'center' }}>Login</h1>
          <div className='input-line'>
            <b>Username</b> <input className='input-border' onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </div>
          <div className='input-line'>
            <b>Password</b> <input className='input-border' type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} style={{ marginLeft: 6 }} placeholder="••••••••" />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 'small',
            marginTop: '10px'
          }}>
            <Link
              to="/create-account"
              style={{
                textDecoration: 'underline',
                color: 'black'
              }}
            >
              Create Account
            </Link>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                onChange={showPass}
                style={{ padding: 0, marginRight: '5px' }}
              />
              <span>Show Password</span>
            </div>
          </div>

          {message && <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>}



          <Button variant="contained" onClick={loginRequest}>Submit</Button>

        </div>
      </div>
    </>
  )
}

