import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="universe" />
        </main>
      </div>{" "}
      <footer className="App-footer">
        <a href="https://github.com/saraporri/dictionary-app">
          Open-source code
        </a>
        <span> by </span>
        <a href="https://www.linkedin.com/in/saraporricino/">Sara Porricino</a>
      </footer>
    </div>
  );
}
