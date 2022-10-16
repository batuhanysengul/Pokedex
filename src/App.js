import "./App.css";
import Header from "./components/header/Header";
import PokeList from "./components/list/PokeList";

function App() {
  return (
    <div className="App">
      <Header />
      <PokeList />
      <div className="noise-bg"></div>
    </div>
  );
}

export default App;
