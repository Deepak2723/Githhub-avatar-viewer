// AvatarDisplay.js
import React from 'react';


function AvatarDisplay({ avatarUrl }) {
  return (
    <div className="AvatarDisplay">
      {avatarUrl && <img src={avatarUrl} alt="Avatar" />}
    </div>
  );
}

export default AvatarDisplay;
