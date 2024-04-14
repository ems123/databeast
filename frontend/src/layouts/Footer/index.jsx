import{
  FooterLogo,
  FooterPattern,
  FooterBg1
} from '../../utils/allImgs'

import './footer.css'

import SecIco from './SecIco'
import SecContent from './SecContent'

var Footer = () => {
    return (
      <>
        <div className="clearfix" />
        <footer className="footer-area bg-img" style={{backgroundImage: `url(${FooterPattern})`}}>
          <div className="footer-content-area " style={{backgroundImage: `url(${FooterBg1})`}}>
            <div className="container">
              <div className="row align-items-end">
                <SecIco logo={FooterLogo} />
                <SecContent />
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer