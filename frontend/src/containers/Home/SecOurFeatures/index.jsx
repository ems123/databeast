import SectionHeading from '../../../components/SectionHeading'
import ServiceBlock from './ServiceBlock'

const SecOurFeatures = ({data , imgPhone , Rings}) => {

  return (
    <section className="features section-padding-100" id='services'>

        <SectionHeading
            title='Databeast.ai Application across Industries '
            text='Revolutionizing Industries with Decentralized AI'
        />
        <div className="container-fluid">
            <div className="row">
                <div className="services-column col-lg-5 col-lg-offset-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
                    {data && data.map((item , key) => (
                        <ServiceBlock
                            key={key}
                            classIco={item.classIco}
                            title={item.title}
                            description={item.description}
                        link = {item.url}
                        />
                    ))}
                </div>
                <div className="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
                    <div className="image-box">
                        <img src={imgPhone} className="center-block img-responsive phone-img" alt="" />
                        <img src={Rings} className="center-block img-responsive rings " alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SecOurFeatures;