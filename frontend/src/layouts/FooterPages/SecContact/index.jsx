import SectionHeading from '../../../components/SectionHeading'
import Form from './Form'

const SecContact = () => {
    return (
        <div className="contact_us_area" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <SectionHeading
                      title="Contact With Us"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
                />
              </div>
            </div>
            <Form />
          </div>
        </div>
    );
}

export default SecContact