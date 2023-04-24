import React, { useState } from "react";
import "./AnimationExercise.css";

const AnimationExercise = () => {
  const [exerciseStarted, setExerciseStarted] = useState(false);

  const handleButtonClick = () => {
    setExerciseStarted(true);
  };

  return (
    <div className="animation-exercise">
      {!exerciseStarted && (
        <button className="start-button" onClick={handleButtonClick}>
          Let's Learn Animation
        </button>
      )}
      {exerciseStarted && (
        <>
          <h2>Squash and Stretch</h2>
          <p>
            This exercise demonstrates the principle of squash and stretch using
            a simple shape - a ball.
          </p>
          <div className="animation-container">
            {/* Add the interactive exercise for Squash and Stretch here */}
          </div>
          {/* Add the toolbar for the exercise here */}
        </>
      )}
    </div>
  );
};

export default AnimationExercise;