
import "./App.css";
import AnimationExercise from "./AnimationExercise";
import BouncingCircle from "./BouncingCircle";




  function App() {
    return (
      <div className="App" style={{ width: "100vw", height: "100vh" }}>
        {/* Add the onAnimationEnd prop to the BouncingCircle component */}
        <BouncingCircle onAnimationEnd={() => console.log("Animation ended")} />
        <AnimationExercise />
      </div>
    );
  }

export default App;