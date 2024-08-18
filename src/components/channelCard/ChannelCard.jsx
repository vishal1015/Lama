import "./styles.css"; 

const ChannelCard = ({ imgSrc, text1, text2 ,onClick}) => {
  return (
    <div className="channel-card-container" onClick={onClick}>
      <div className="channel-card-image-container">
        <img src={imgSrc} alt="" className="channel-card-image" />
      </div>
      <div className="channel-card-text-container">
        <h2>{text1}</h2>
        <h2>{text2}</h2>
      </div>
    </div>
  );
};

export default ChannelCard;
