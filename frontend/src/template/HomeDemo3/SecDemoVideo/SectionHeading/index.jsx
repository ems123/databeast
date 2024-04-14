const Span = () => <span></span>

const SectionHeading = () => {

  return (
    <div className="section-heading text-center">
        <div className="dream-dots justify-content-center">
            {Array(7).fill().map((item , key) => (
                    <Span key={key} />
                ))}
        </div>
        <h2 className="wow fadeInUp" data-wow-delay="0.3s">Watch our demo video</h2>
        <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
    </div>
  );
}

export default SectionHeading;