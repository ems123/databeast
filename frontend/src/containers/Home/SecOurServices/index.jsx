import SectionHeading from '../../../components/SectionHeading'
import Content from './Content'

const SecOurServices = ({data}) => {

  return (
    <section className="our_services_area section-padding-100-70 clearfix" id="services">
        <div className="container">
            
            <SectionHeading
                title='Our Core Services'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
            />
                

            <div className="row">
                {data && data.map((item , key) => (
                    <Content
                        key={key}
                        img={item.img}
                        title={item.title}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecOurServices;