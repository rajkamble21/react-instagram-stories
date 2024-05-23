import React from "react";
import ReactInstaStories from "react-insta-stories";
import "./StoryViewer.css";

function StoryViewer({ stories }) {
  return (
    <div className="viewer-container">
      <ReactInstaStories
        stories={stories}
        defaultInterval={5000}
        width={getStoryWidth()}
        height={getStoryHeight()}
      />
    </div>
  );
}

function getStoryWidth() {
  if (window.innerWidth <= 480) {
    return 300; // Mobile
  } else if (window.innerWidth <= 768) {
    return 400; // Tablet
  } else {
    return 432; // Desktop
  }
}

function getStoryHeight() {
  if (window.innerWidth <= 480) {
    return 540; // Mobile
  } else if (window.innerWidth <= 768) {
    return 600; // Tablet
  } else {
    return 768; // Desktop
  }
}

export default StoryViewer;
