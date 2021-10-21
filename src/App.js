import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Don't gobblefunk around with words....</h1>
          <h2> - Roald Dahl</h2>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="app-footer">
          <small>Coded by ZoCodes</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
