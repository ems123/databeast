const SecWelcomeMeter = ({img}) => {

  return (
    <div className="col-12 col-lg-6">
        <div className="welcome-meter" data-aos="fade-up">
            <img src={img} className="center-block" alt="" />
        </div>
    </div>
  );
}

export default SecWelcomeMeter;