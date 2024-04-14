import SectionHeading from '../../../components/SectionHeading'
import SecSingleCoolFact from './SecSingleCoolFact'

const SecTrust = ({data}) => {

  return (
    <section className="trust-section section-padding-100">

        <SectionHeading
            title='We are trusted'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
        />
        

        <div className="container">
            <div className="row">
                <SecSingleCoolFact data={data}/>
            </div>
        </div>
    </section>
  );
}

export default SecTrust;