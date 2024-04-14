const SecGroup = () => {

  return (
    <div className="col-lg-8 col-lg-offset-2 col-md-8 offset-md-2 col-xs-12 text-center">
        <div className="group">
            <input type="text" name="subject" required=""/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>enter your email</label>
            <button className="dream-btn"><i className="fa fa-paper-plane-o"></i></button>
        </div>
    </div>
  );
}

export default SecGroup;