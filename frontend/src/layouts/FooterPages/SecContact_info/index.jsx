
import{
  FooterLogo,
  FooterPattern,
  FooterBg1
} from '../../utils/allImgs'

const SecContact_info = () => {
    return (
        <div className="footer-content-area " style={{backgroundImage: 'url(img/core-img/footer-bg1.png)'}}>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-12 col-md-5">
                <SecCopywrite img={FooterLogo} />
              </div>
              <div className="col-12 col-md-7">
                {/* Content Info */}
                <div className="contact_info_area d-sm-flex justify-content-between">
                  <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.2s">
                    <h5>NAVIGATE</h5>
                    <a href="https://databeast.ai"><p>HOME</p></a>
                    <a href="#about"><p>ABOUT</p></a>
                    <a href="#services"><p>SERVICES</p></a>
                    <a href="#roadmap"><p>ROADMAP</p></a>
                    <a href="#team"><p>TEAM</p></a>
                  </div>
                  {/* Content Info */}
                  <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.3s">
                    <h5>PRIVACY &amp; TOS</h5>
                    
                    <a href><p>Privacy Policy</p></a>
                    
                  </div>
                  {/* Content Info */}
                  <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.4s">
                    <h5>CONTACT US</h5>
                    <p>Mailing Address:xx00 E. Union Ave</p>
                    <p>Suite 1100. Denver, CO 80237</p>
                    <p>+999 90932 627</p>
                    <p>support@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default SecContact_info