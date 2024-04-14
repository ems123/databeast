const Timeline = ({timelineClass , title ,date_from ,date_to}) => {

  return (
      <div className={timelineClass}>
         <h3>{title}</h3>
         <span className="date">{date_from}</span> <span className="between">to</span> <span className="date">{date_to}</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto adipisci provident officia animi.</p>
      </div>
  );
}

export default Timeline;