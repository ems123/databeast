import SectionHeading from '../../../components/SectionHeading'
import Timeline from './Timeline'

const SecOurRoadmap = ({data}) => {

  return (
    <section className="roadmap" style={{paddingBottom:0}} id="roadmap">
        <SectionHeading
            title='Our ICO Roadmap'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
        />
        <div className="container">
          <div className="row">
            <div className="timeline-split">
              <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="timeline section-box-margin">
                      {data && data.map((item , key) => (
                          <Timeline
                            key={key}
                            timelineClass={item.timelineClass}
                            title={item.title}
                            date_from={item.date_from}
                            date_to={item.date_to}
                          />
                        ))}
                      <div className="circle"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default SecOurRoadmap;