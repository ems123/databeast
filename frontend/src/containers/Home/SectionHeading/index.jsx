function SectionHeading(){
  return(
    <div className="section-heading text-center">
        <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
            {Array(7).fill().map((item , key) => (
                <span key={key}></span>
              ))}
        </div>
        <h2 className="wow fadeInUp" data-wow-delay="0.3s">Choose a demo</h2>
        <p className="wow fadeInUp" data-wow-delay="0.4s">
          Our ICO will be a perfect platform for presenting your ico launch.
          This Landing Page comes in great and clean design
        </p>
    </div>
  )
}

export default SectionHeading