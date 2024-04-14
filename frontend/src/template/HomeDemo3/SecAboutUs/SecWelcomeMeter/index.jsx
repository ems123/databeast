const SecWelcomeMeter = ({img}) => {

  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
        <div className="welcome-meter">
            <img src={img} className="center-block" alt="" />
        </div>
    </div>
  );
}

export default SecWelcomeMeter;