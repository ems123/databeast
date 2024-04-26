function SecWelcomeContent({img}){
  return(
      <div className="welcome-content">
          <div className="promo-section">
              <div className="integration-link">
                  <span className="integration-icon">
                      <img src={img} width="24" height="24" alt="" />
                  </span>
                  <span className="integration-text">Unleash the power of Decentralized Generative AI </span>
              </div>
          </div>
          <h1>Databeast AI Launching Soon!</h1>
          <p>
          At the forefront of the generative AI revolution, we harness the power of AI to predict the future of crypto and beyond.
          <br></br>
            <b>Our mission:</b> To democratize AI-driven analytics, making it accessible to all.
            <br></br>
            Join us in exploring new horizons of data intelligence.
          </p>
          <div className="dream-btn-group">
              <a href="#" className="btn dream-btn mr-3">Learn More</a>
              <a href="#" className="btn dream-btn">Contact Us</a>
          </div>
      </div>
  )
}

export default SecWelcomeContent