const ServiceBlock = ({classIco , title, description}) => {

  return (
    <div className="services-block-four">
        <div className="inner-box">
            <div className="icon-box">
                <span className={classIco}></span>
            </div>
            <h3><a href="#">{title}</a></h3>
            <div className="text">{description}</div>
        </div>
    </div>
  );
}

export default ServiceBlock;