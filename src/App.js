import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
      </div>{" "}
      <footer className="App-footer">
        <a href="https://github.com/saraporri/dictionary-app">Code</a> by Sara
      </footer>
    </div>
  );
}
