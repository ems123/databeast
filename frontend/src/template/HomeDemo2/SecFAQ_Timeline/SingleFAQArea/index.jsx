
const SingleFAQArea = ({text , ID}) => {

  return (
  	<>
	    <dt className="wave" data-toggle="collapse" data-target={`#${ID}`}>{text}</dt>
	    <dd data-aos="fade-up" id={ID} className="collapse">
	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
	    </dd>

  	</>
  );
}

export default SingleFAQArea;