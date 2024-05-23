import React, { useState, useEffect } from "react";
import axios from "axios";
import StoryViewer from "./components/StoryViewer";
import ProfileList from "./components/ProfileList";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    // Simulate API call with delay
    setTimeout(() => {
      axios
        .get("/stories.json")
        .then((response) => {
          setProfiles(response.data);
        })
        .catch((error) => {
          console.error("Error fetching stories:", error);
        });
    }, 1000); // 1-second delay to simulate network latency
  }, []);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    window.history.pushState(null, "", "/stories"); // Update URL to simulate navigation
  };

  // Handle back button to return to profile list
  useEffect(() => {
    const handlePopState = () => {
      setSelectedProfile(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="app-container">
      {selectedProfile ? (
        <StoryViewer stories={selectedProfile.stories} />
      ) : (
        <ProfileList
          profiles={profiles}
          onProfileSelect={handleProfileSelect}
        />
      )}
    </div>
  );
}

export default App;
