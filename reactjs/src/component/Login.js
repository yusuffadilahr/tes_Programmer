import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import gundark from '../assets/gundark.jpg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            setMsg('Login Sukses!');
            window.alert('Login Sukses!');
            history.push('/dashboard');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const backgroundStyle = {
        backgroundImage: `url(${gundark})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const transparentBoxStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Ubah nilai alpha (0.7) sesuai kebutuhan transparansi yang diinginkan
        padding: '20px',
        borderRadius: '8px'
    };


    return (
        <section className="hero is-fullheight" style={backgroundStyle}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box" style={transparentBoxStyle}>
                                <p className='has-text-centered'>{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email or Username</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="username"
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="fieldmt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="*******"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-black is-fullwidth">Login</button>
                                </div>
                                <div>
                                    <p className="has-text-centered">Don't have an account? <a href="/register" >Sign Up</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
