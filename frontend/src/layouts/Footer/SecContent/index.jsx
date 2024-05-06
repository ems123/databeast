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
              <a href><p>WhitePaper </p></a>

             
            </div>
            {/* Content Info */}
            <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.4s">
              <h5>Phone</h5>
              <p>Mailing Address:xx00 E. Union Ave</p>
              <p>Suite 1100. Denver, CO 80237</p>
              <p>+999 90932 627</p>
              <p>support@yourdomain.com</p>
            </div>
          </div>
        </div>
	)
}

export default SecContent