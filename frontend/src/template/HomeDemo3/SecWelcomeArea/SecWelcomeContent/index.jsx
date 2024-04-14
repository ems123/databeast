function SecWelcomeContent({img}){
  return(
      <div className="welcome-content">
          <div className="promo-section">
              <div className="integration-link">
                  <span className="integration-icon">
                      <img src={img} width="24" height="24" alt="" />
                  </span>
                  <span className="integration-text">Discover a new ways to enjoy your World!</span>
              </div>
          </div>
          <h1>Buy & sell crypto easier than ever</h1>
          <p>
              We have over 15 year exprience in business consultting arena.
              We have over 15 year exprience in business consultting arena
              and artficial intelligence.
          </p>
          <div className="dream-btn-group">
              <a href="#" className="btn dream-btn mr-3">Learn More</a>
              <a href="#" className="btn dream-btn">Contact Us</a>
          </div>
      </div>
  )
}

export default SecWelcomeContent