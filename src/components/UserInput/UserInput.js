// UserInput.js
import React, { useState } from 'react';
import './UserInput.css';

function UserInput({ onUsernameChange }) {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    onUsernameChange(newUsername);
  };

  return (
    <div className="UserInput">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default UserInput;
