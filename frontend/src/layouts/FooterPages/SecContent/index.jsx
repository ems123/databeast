const SecContent = () => {
	return(
        <div className="col-12 col-md-7">
          {/* Content Info */}
          <div className="contact_info_area d-sm-flex justify-content-between">
            <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.2s">
              <h5>NAVIGATE</h5>
              <a href><p>Advertisers</p></a>
              <a href><p>Developers</p></a>
              <a href><p>Resources</p></a>
              <a href><p>Company</p></a>
              <a href><p>Connect</p></a>
            </div>
            {/* Content Info */}
            <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.3s">
              <h5>PRIVACY &amp; TOS</h5>
              <a href><p>Advertiser Agreement</p></a>
              <a href><p>Acceptable Use Policy</p></a>
              <a href><p>Privacy Policy</p></a>
              <a href><p>Technology Privacy</p></a>
              <a href><p>Developer Agreement</p></a>
            </div>
            {/* Content Info */}
            <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.4s">
              <h5>Phone</h5>
              <p>Address</p>
              <p>Street</p>
              <p>Contact No</p>
              <p>Email</p>
            </div>
          </div>
        </div>
	)
}

export default SecContent