import React from 'react';

const DeleteUserPopup = ({ onClose, onDelete }) => {
    return (
        <div>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this user?</p>
            <button onClick={onDelete}>DELETE</button>
            <button onClick={onClose}>CANCEL</button>
        </div>
    );
};

export default DeleteUserPopup;
