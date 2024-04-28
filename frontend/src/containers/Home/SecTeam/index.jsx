import SectionHeading from '../../../components/SectionHeading'

const SecTeam = ({data}) => {

  return (
    <section className="our_team_area section-padding-0-0 clearfix" id="team">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SectionHeading
                        title='Awesome Team'
                        text='The core team behind DataBeast.ai'
                    />
                </div>
            </div>

            <div className="row align-items-center justify-content-center">
                {data && data.map((item , key) => (
                    <div className="col-12 col-sm-6 col-lg-3" data-aos="fade-up">
                        <div className="single-team-member">
                            <div className="team-member-thumb">
                                <img src={item.img} className="center-block" alt="" />
                            </div>
                            <div className="team-info">
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                            <div className="team-social-icon">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-skype"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecTeam;