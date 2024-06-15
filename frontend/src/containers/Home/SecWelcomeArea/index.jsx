import { HomeDemo1Dollar } from "../../../utils/allImgs";

import SecWelcomeContent from "./SecWelcomeContent";

const DIV = () => <div className="dream-blip blip1"></div>;

const SecWelcomeArea = () => {
  return (
    <section
      className="welcome_area clearfix dzsparallaxer auto-init ico fullwidth"
      data-options={{ direction: "normal" }}
      id="home"
    >
      <div className="divimage dzsparallaxer--target Home1WelcomeAreaIMG"></div>

      <div className="hero-content dark-blue">
        {Array(4)
          .fill()
          .map((item, key) => (
            <DIV />
          ))}

        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-lg-6 col-md-12">
              <SecWelcomeContent img={HomeDemo1Dollar} />
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="main-ilustration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecWelcomeArea;
