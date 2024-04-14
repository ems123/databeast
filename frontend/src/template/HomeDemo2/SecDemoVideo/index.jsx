import SectionHeading from '../../../components/SectionHeading'
import SecVideoArea from './SecVideoArea'

const SecDemoVideo = ({img}) => {

  return (
    <section className="demo-video section-before section-padding-100">
        <div className="container">
            <SectionHeading
                title='Watch our demo video'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
            />
            <SecVideoArea img={img} />
        </div>
    </section>
  );
}

export default SecDemoVideo;