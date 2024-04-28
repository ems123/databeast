import SectionHeading from '../../../components/SectionHeading'
import { Link } from "react-router-dom";


const SecHowItWorks = ({data , imgPhone}) => {

  return (
      <section className="features section-padding-100-0" id='about'>
        <SectionHeading
            title='Areas where we work'
            text='Where Innovation meets the future of Data Intelligence.            '
        />
        <div className="container">
          <div className="row">
            <div className="service-img-wrapper how col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <img src={imgPhone} className="center-block img-responsive phone-img" alt="" />
              </div>
            </div>
            <div className="services-column col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
              {/*Services Block Four*/}
              {data && data.map((item , key) => (
                <Link to={item.url}>
                <div className="services-block-four how" key={key}>
                  <div className="inner-box">
                    <div className="step">{item.step}</div>
                    <h3>{item.title}</h3>
                    <div className="text">{item.description}</div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default SecHowItWorks;