import "../../assets/scss/speaking/Alphabet.scss";
import alphabet from "../../assets/data/alphabet.json";
import Letter from "./Letter";

const Alphabet = () => {
  const letters = Object.entries(alphabet).map(([key, value]) => (
    <Letter key={key} objKey={key} objValue={value} />
  ));

  return (
    <div id="alphabet-wrapper" className="section">
      <h2 className="section-title">01 - Introduction</h2>
      <div className="alphabet-content">
        <div className="letters-content">{letters}</div>
        <div className="alphabet-info">
          <h2 className="alphabet-title">
            <span className="text-green-italy">Italian</span>{" "}
            <span className="text-red-italy">alphabet</span>
          </h2>
          <p className="alphabet-desc">
            Learning the Italian alphabet is an essential first step in
            mastering the language. It consists of 21 letters,
            each with its unique sound. Some letters, like <strong>C</strong>
            and <strong>G</strong> can have two different sounds depending on
            the letters that follow them, while some may be silent like <strong>H</strong>. To help you get familiar with these
            sounds, we have provided audio clips for each letter. Simply click on
            the volume icon to listen and practice your pronunciation.
          </p>
          <p className="alphabet-desc">
            Take your time to explore and repeat each sound to build a strong
            foundation in Italian pronunciation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
