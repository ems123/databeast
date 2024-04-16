import SectionHeading from '../../../components/SectionHeading'

const SecHowItWorks = ({data , imgPhone}) => {

  return (
      <section className="features section-padding-100-0">
        <SectionHeading
            title='How it works'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
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
                <div className="services-block-four how" key={key}>
                  <div className="inner-box">
                    <div className="step">{item.step}</div>
                    <h3><a href="#">{item.title}</a></h3>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default SecHowItWorks;