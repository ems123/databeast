import SectionHeading from '../../../components/SectionHeading'
import Timeline from './Timeline'

const SecOurRoadmap = ({data , img}) => {

  return (
    <section className="roadmap section-padding-100" style={{background: `url(${img}) center center / cover no-repeat`, backgroundSize: 'cover'}} id="roadmap">
        <SectionHeading
            title='ROADMAP'
            text='Roadmap and milestones of DataBeast.aigit'
        />
        <div className="container-fluid">
          <div className="row">
            <div className="section_5-content">
              <div className="section_5-slider-trumb" />
              <div id="section_5-slider-circle">
                 {data && data.map((item , key) => (
                    <Timeline
                      key={key}
                      left={item.left}
                      ClassName={item.ClassName}
                      date={item.date}
                      IsSpan={item.IsSpan}
                      TextSpan={item.TextSpan}
                      IsTowLi={item.IsTowLi}
                      TextTowLi1={item.TextTowLi1}
                      TextTowLi2={item.TextTowLi2}
                      IsThreeLi={item.IsThreeLi}
                      TextThreeLi1={item.TextThreeLi1}
                      TextThreeLi2={item.TextThreeLi2}
                      TextThreeLi3={item.TextThreeLi3}
                      IsFourLi={item.IsFourLi}
                      TextFourLi1={item.TextFourLi1}
                      TextFourLi2={item.TextFourLi2}
                      TextFourLi3={item.TextFourLi3}
                      TextFourLi4={item.TextFourLi4}
                      img={item.img}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default SecOurRoadmap;