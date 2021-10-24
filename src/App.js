import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Don't gobblefunk around with words....</h1>
          <h2>
            <em>- Roald Dahl</em>
          </h2>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="app-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/ZoeElizabethBlogg"
              target="_blank"
              rel="noreferrer noopener"
            >
              ZoCodes
            </a>{" "}
            and the source can be found on{" "}
            <a
              href="https://github.com/ZoCodes/dictionaryapp-react"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
