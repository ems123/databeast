const DocElement = ({title}) => {

  return (
    <div className="col-md-6 col-sm-6 col-xs-12" data-aos="fade-up">
        <div className="doc-element">
            <a className="document-entry" href="#" target="_blank"><span className="title">{title}</span></a>
        </div>
    </div>
  );
}

export default DocElement;