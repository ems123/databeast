const SingleCoolFact = ({img , ico_check}) => {

  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
        <div className="trust-item text-center">
            <div className="ico-platform-logo">
                <img src={img} alt="" />
            </div>
            <div className="check">
            	{ico_check ? (<div className="check-icon"></div>) : (<div className="value">8.9</div>)}
            </div>
        </div>
    </div>
  );
}

export default SingleCoolFact;