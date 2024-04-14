import {HomeDemo2Dollar} from '../../../utils/allImgs'

import SecWelcomeContent from './SecWelcomeContent'

const DIV = () => <div className="dream-blip blip1"></div>

const SecWelcomeArea = () => {

  return (
    <section className="welcome_area clearfix dzsparallaxer auto-init none fullwidth" data-options={{direction: "normal"}} id="home">
        <div className="divimage dzsparallaxer--target Home1WelcomeAreaIMG"></div>

        <div className="hero-content transparent">
            {Array(4).fill().map((item , key) => (
                <DIV />
              ))}

            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 col-lg-6 col-md-12">
                        <SecWelcomeContent img={HomeDemo2Dollar} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SecWelcomeArea;