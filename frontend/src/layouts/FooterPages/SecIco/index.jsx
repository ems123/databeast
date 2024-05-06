const SecIco = ({logo}) => {
	return(
        <div className="col-12 col-md-5">
          <div className="footer-copywrite-info">
            {/* Copywrite */}
            <div className="copywrite_text wow fadeInUp" data-wow-delay="0.2s">
              <div className="footer-logo">
                <a href="#"><img src={logo} alt="logo" /><span className='text-white' style={{fontSize: 20}}>DATABEAST.AI</span></a>
              </div>
              <p> 
              At Databeast.ai, our mission is to democratize access to advanced AI analytics across industries, leveraging the power of decentralized computing to ensure privacy, security, and efficiency. Our decentralized approach powers solutions that are robust and effective, secure, and privacy-focused, adhering to the highest data integrity standards.
              </p>
            </div>
            {/* Social Icon */}
            <div className="footer-social-info wow fadeInUp" data-wow-delay="0.4s">
              <a href="https://www.facebook.com/databeast_ai"><i className="fa-brands fa-facebook" aria-hidden="true" /></a>
              <a href="https://twitter.com/databeast_ai"> <i className="fa-brands fa-twitter" aria-hidden="true" /></a>
              <a href="https://discord.com/invite/6uBjGkSU5G"> <i className="fa-brands fa-discord" aria-hidden="true" /></a>
              <a href="https://www.instagram.com/databeast_ai"><i className="fa-brands fa-instagram" aria-hidden="true" /></a>
              <a href="https://www.instagram.com/databeast_ai"><i className="fa-brands fa-telegram" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
	)
}

export default SecIco