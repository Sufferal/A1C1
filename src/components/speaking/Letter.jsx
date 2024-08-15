import "../../assets/scss/speaking/Letter.scss";

const Letter = ({ objKey, objValue }) => {
  const audioHandler = (e) => {
    let audioPath = e.target.value;
    let letterAudio = new Audio(audioPath);
    letterAudio.play();
  };

  return (
    <div className="letter-wrapper">
      <h3 className="letter-name">{objKey}</h3>
      {objValue.length === 1 ? (
        <button className="letter-btn" onClick={audioHandler} value={objValue}>
          Play
        </button>
      ) : (
        <div className="letter-btn-wrapper">
          {objValue.map((audioValue, index) => (
          <button
            key={index}
            className="letter-btn"
            onClick={audioHandler}
            value={audioValue}
          >
            Play
          </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Letter;
