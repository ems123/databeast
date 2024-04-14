import SecWhoWeContant from './SecWhoWeContant'
import SecWelcomeMeter from './SecWelcomeMeter'

const SecAboutUs = ({img}) => {

  return (
    <section className="about-us-area section-padding-0-100 clearfix">
        <div className="container">
            <div className="row align-items-center">

                <SecWhoWeContant />

                <SecWelcomeMeter img={img} />
            </div>
        </div>
    </section>
  );
}

export default SecAboutUs;