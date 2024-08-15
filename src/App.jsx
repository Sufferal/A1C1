import "./assets/scss/App.scss";
import Header from "./components/Header";
import Alphabet from "./components/speaking/Alphabet";

function App() {
  return (
    <div id="app-wrapper">
      <Header />
      <div id="app-content">
        <Alphabet />
      </div>
    </div>
  );
}

export default App;
