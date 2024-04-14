const TokenInfo = ({text , img}) => {

  return (
    <div className="token-info">
        <div className="info-wrapper">
            <div className="token-icon" style={{backgroundImage: `url(${img})`}}></div>
            <div className="token-descr">{text}</div>
        </div>
    </div>
  );
}

export default TokenInfo;