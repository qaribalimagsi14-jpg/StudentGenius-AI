import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <h1>🎓 StudentGenius AI</h1>
        <p>Your Personal AI Study Partner</p>

        <button>Get Started</button>
      </main>
    </div>
  );
}

export default App;