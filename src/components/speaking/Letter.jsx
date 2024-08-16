import "../../assets/scss/speaking/Letter.scss";
import VolumeIcon from "../icons/VolumeIcon";

const Letter = ({ objKey, objValue }) => {
  const audioHandler = (e) => {
    let audioPath = e.target.closest("button").value;
    let letterAudio = new Audio(audioPath);
    letterAudio.play();
  };

  return (
    <div className="letter-wrapper">
      <h3 className="letter-name">{objKey}</h3>
      {objValue.length === 0 ? (
        <button className="letter-btn letter-btn-disabled">Silent</button>
      ) : (
        ""
      )}
      {objValue.length === 1 ? (
        <button className="letter-btn" onClick={audioHandler} value={objValue}>
          <VolumeIcon />
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
              <VolumeIcon />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Letter;
