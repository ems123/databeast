import { Link } from "react-router-dom";

const Content = ({img , title, url}) => {

  return (
    <Link to={url}>
    <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
        
        <div className="service_single_content text-left mb-100">
            
            <div className="service_icon">
                <img src={img} alt="" />
            </div>
            <h6>{title}</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.</p>
        </div>
    </div>
    </Link>
  );
}

export default Content;