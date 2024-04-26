
const SecCopywrite = ({img}) => {
    return (
        <div className="footer-copywrite-info">
          <div className="copywrite_text wow fadeInUp" data-wow-delay="0.2s">
            <div className="footer-logo">
              <a href="#"><img src={img} alt="logo" /> Somia.</a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad, a eaque officiis eligendi blanditiis odio necessitatibus.</p>
          </div>
          <div className="footer-social-info wow fadeInUp" data-wow-delay="0.4s">
            <a href="https://www.facebook.com/databeast_ai"><i className="fa fa-facebook" aria-hidden="true" /></a>
            <a href="https://twitter.com/databeast_ai"> <i className="fa fa-twitter" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
            <a href="https://www.instagram.com/databeast_ai"><i className="fa fa-instagram" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
          </div>
        </div>
    );
}

export default SecCopywrite