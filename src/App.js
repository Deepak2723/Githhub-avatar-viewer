// App.js
import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import AvatarDisplay from './components/AvatarDispaly/AvatarDisplay';
import Error from './components/Error/Error';
import useDebounce from './Debounce/useDebounce';
import './App.css';

function App() {
  
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = useDebounce((newUsername) => {
    if (!newUsername) {
      setAvatarUrl('');
      setError('');
      return;
    }

    fetch(`https://api.github.com/users/${newUsername}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.avatar_url) {
          setAvatarUrl(data.avatar_url);
          setError('');
        } else {
          setAvatarUrl('');
          setError('User not found');
        }
      })
      .catch(() => {
        setAvatarUrl('');
        setError('An error occurred');
      });
  }, 300);

  return (
    <div className="App">
      <h1>GitHub Avatar App</h1>
      <UserInput onUsernameChange={handleUsernameChange} />
      <AvatarDisplay avatarUrl={avatarUrl} />
      {error && <Error message={error} />}
    </div>
  );
}

export default App;
