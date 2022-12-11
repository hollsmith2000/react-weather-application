import "./css/App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="card-body">
        <Weather defaultCity="Manchester" />
      </div>
    </div>
  );
}

export default App;
