const SecContent = () => {
	return(
        <div className="col-12 col-md-7">
          {/* Content Info */}
          <div className="contact_info_area d-sm-flex justify-content-between">
            <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.2s">
              <h5>NAVIGATE</h5>
              <a href><p>HOME</p></a>
              <a href><p>ABOUT</p></a>
              <a href><p>SERVICES</p></a>
              <a href><p>ROADMAP</p></a>
              <a href><p>TEAM</p></a>
            </div>
            {/* Content Info */}
            <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.3s">
              <h5>PRIVACY &amp; TOS</h5>
              
              <a href><p>Privacy Policy</p></a>
              
            </div>
            {/* Content Info */}
            <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.4s">
              <h5>CONTACT US</h5>
              <p>Email: <a className="text-white" href="mailto:social@databeast.ai">social@databeast.ai</a></p>
            </div>
          </div>
        </div>
	)
}

export default SecContent