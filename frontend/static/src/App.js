import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <nav>
        {" "}
        <Header />
      </nav>
      <h1 id="page-title">Hello World,Im Amber</h1>
    </div>
  );
}

export default App;
