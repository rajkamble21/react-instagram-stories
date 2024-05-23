import React from "react";
import "./ProfileList.css";

function ProfileList({ profiles, onProfileSelect }) {
  return (
    <div className="list-container">
      {profiles.map((profile, index) => (
        <div
          className="profile-item"
          key={index}
          onClick={() => onProfileSelect(profile)}
        >
          <img
            className="profile-image"
            src={profile.profile.profileImage}
            alt={profile.profile.name}
          />
          <div className="profile-name">{profile.profile.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
