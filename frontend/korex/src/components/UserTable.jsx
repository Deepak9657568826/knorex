import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignUpForm from './SignUpForm';
import DeleteUserPopup from './DeleteUserPopup';
import ExportUsers from './ExportUsers';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleSelectUser = (userId) => {
        setSelectedUsers(prevSelected => {
            if (prevSelected.includes(userId)) {
                return prevSelected.filter(id => id !== userId);
            }
            return [...prevSelected, userId];
        });
    };

    const handleDeleteUser = (userId) => {
        axios.delete(`http://localhost:5000/api/users/${userId}`)
            .then(() => {
                setUsers(users.filter(user => user._id !== userId));
                setShowDeletePopup(false);
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <div>
            <button onClick={() => setShowSignUp(true)}>SIGN UP</button>
            <button onClick={() => setShowDeletePopup(true)} disabled={selectedUsers.length === 0}>DELETE</button>
            <button onClick={() => axios.post('http://localhost:5000/api/users/export', { ids: selectedUsers }, { responseType: 'blob' })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'users.csv');
                    document.body.appendChild(link);
                    link.click();
                })
                .catch(error => console.error('Error exporting users:', error))}>EXPORT</button>
            
            <table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => handleSelectUser(user._id)}
                                />
                            </td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => {
                                    setUserToDelete(user);
                                    setShowDeletePopup(true);
                                }}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} onAddUser={newUser => setUsers([...users, newUser])} />}
            {showDeletePopup && <DeleteUserPopup onClose={() => setShowDeletePopup(false)} onDelete={() => handleDeleteUser(userToDelete._id)} />}
        </div>
    );
};

export default UserTable;
