import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = ({ onClose, onAddUser }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!email.includes('@')) newErrors.email = 'Invalid email';
        if (password.length < 6) newErrors.password = 'Password too short';
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            axios.post('https://knorex-1.onrender.com/api/users', { firstName, lastName, email, password })
                .then(response => {
                    onAddUser(response.data);
                    onClose();
                })
                .catch(error => console.error('Error adding user:', error));
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    {errors.email && <span>{errors.email}</span>}
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {errors.password && <span>{errors.password}</span>}
                </label>
                <button type="submit">SIGN UP</button>
                <button type="button" onClick={onClose}>CANCEL</button>
            </form>
        </div>
    );
};

export default SignUpForm;
