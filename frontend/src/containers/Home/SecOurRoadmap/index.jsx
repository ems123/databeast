import SectionHeading from '../../../components/SectionHeading'
import Timeline from './Timeline'

const SecOurRoadmap = ({data}) => {

  return (
    <section className="roadmap" style={{paddingTop:30}} id="roadmap">
        <SectionHeading
            title='ROADMAP'
            text='Roadmap and Milestones of Databeast.ai'
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
                            text={item.text}
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