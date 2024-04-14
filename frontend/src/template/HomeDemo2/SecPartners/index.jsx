import SectionHeading from '../../../components/SectionHeading'

const SecPartners = ({data}) => {

  return (
    <section className="partners">

        <SectionHeading
            title='Our Awesome Partners'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
        />

        <div className="container">
            <div className="row">
                {data && data.map((item , key) => (
                    <div className="col-lg-2 col-sm-6" data-aos="fade-up" key={key}>
                        <div className="partner-box">
                            <img src={item.img} alt="" className="center-bock" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecPartners;