import { useState } from 'react';
import axios from 'axios';
import './style.css';
import ApiConstants from './app_constants';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secPassword, setSecPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const showPass = () => {
        setShowPassword(!showPassword);
    }

    const createAccountRequest = async () => {
        if (secPassword != password) {
            setMessage("Passwords Do Not Match");
            return;
        }

        if (!username || !password || !secPassword) {
            setMessage("Add Your Information");
            return;
        }

        const payload = { username, password };

        const response = await axios.post(
            `${ApiConstants.baseUrl}${ApiConstants.createAccountPrefix}`,
            payload
        ).then(
            (res) => {
                if (res.status === 201) {
                    setMessage("Account created successfully");
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                }
            }
        ).catch(
            (err) => {
                setMessage(err.response.statusText);
            }
        )
    }

    return (
        <>
            <div className='background'>
                <div className='login'>
                    <h1 className='baldfont' style={{ textAlign: 'center' }}>Create Account</h1>
                    <div className='input-line'>
                        <b>Username</b> <input className='input-border' onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                    </div>
                    <div className='input-line'>
                        <b>Password</b> <input className='input-border' type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} style={{ marginLeft: 6 }} placeholder="••••••••" />
                    </div>
                    <div className='input-line'>
                        <b>Confirm Password</b> <input className='input-border' type={showPassword ? 'text' : 'password'} onChange={(e) => setSecPassword(e.target.value)} style={{ marginLeft: 6 }} placeholder="••••••••" />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <Link
                            to="/"
                            style={{
                                textDecoration: 'underline',
                                color: 'black',
                                fontSize: 'small'
                            }}
                        >
                            Login
                        </Link>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox
                                onChange={showPass}
                                style={{ padding: 0, marginRight: '5px' }}
                            />
                            <span style={{ fontSize: 'small' }}>Show Password</span>
                        </div>
                    </div>

                    {message && <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>}



                    <Button variant="contained" onClick={createAccountRequest}>Submit</Button>
                </div>
            </div>
        </>
    )
}

