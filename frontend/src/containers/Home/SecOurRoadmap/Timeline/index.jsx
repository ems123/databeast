const Timeline = ({timelineClass , title ,date_from ,date_to,text}) => {

  return (
      <div className={timelineClass}>
         <h3>{title}</h3>
         <span className="date">{date_from}</span> <span className="between">to</span> <span className="date">{date_to}</span>
         {/* <p>{text}</p> */}
         <ul>
           {text.map((item,index) => <li key={index} className="text-white" style={{listStyleType:"circle", textAlign:"left"}}>{item}</li>)}
         </ul>
      </div>
  );
}

export default Timeline;