import "../../assets/scss/speaking/Alphabet.scss";
import alphabet from "../../assets/data/alphabet.json";
import Letter from "./Letter";

const Alphabet = () => {
  const letters = Object.entries(alphabet).map(([key, value]) => (
    <Letter key={key} objKey={key} objValue={value} />
  ));

  return (
    <div id="alphabet-wrapper" className="section">
      <h2 className="section-title">Alphabet</h2>
      <div id="alphabet-content">
        {letters}
      </div>
    </div>
  );
};

export default Alphabet;
