const Timeline = ({
	left,
	ClassName,
	date,
	IsSpan,
	TextSpan,

	IsTowLi,
	TextTowLi1,
	TextTowLi2,

	IsThreeLi,
	TextThreeLi1,
	TextThreeLi2,
	TextThreeLi3,

	IsFourLi,
	TextFourLi1,
	TextFourLi2,
	TextFourLi3,
	TextFourLi4,
	img
}) => {

  return (
    <div style={{left: `${left}`}} className={ClassName} data-date={date}>
      <div className="data_cir-content">
        <span>
          <span className="roadmap_content_info">
				{
					IsSpan ? TextSpan :
					IsTowLi ? (
                        <ul>
                          <li><span>{TextTowLi1}</span></li>
                          <li><span>{TextTowLi2}</span></li>
                        </ul>
					):
					IsThreeLi ? (
                        <ul>
                          <li><span>{TextThreeLi1}</span></li>
                          <li><span>{TextThreeLi2}</span></li>
                          <li><span>{TextThreeLi3}</span></li>
                        </ul>
					):
					IsFourLi ? (
                        <ul>
                          <li><span>{TextFourLi1}</span></li>
                          <li><span>{TextFourLi2}</span></li>
                          <li><span>{TextFourLi3}</span></li>
                          <li><span>{TextFourLi4}</span></li>
                        </ul>
					) : ""
				}
          </span>
          <span className="roadmap_img">
            <img src={img} alt="" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Timeline;