import './SecMission.css'

const SecMission = ({data}) => {

  return (
    <section className="our-mission-area  clearfix" id="feature">
        <div className="divimage dzsparallaxer--target dzsparallaxer--targetIMG"></div>
        <div className="our-mission-content">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    {data && data.map((item , key) => (
                        <div className="col-12 col-md-4" key={key}>
                            <div className="single-mission">
                                <i className={item.icoName}></i>
                                <h6>{item.title}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, illo, cumque. Fuga neque similique quibusdam animi ipsam obcaecati.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}

export default SecMission;