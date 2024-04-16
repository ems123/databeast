import {useEffect}  from "react";
import './style/HomeDemo3.scss'

import {
          VerticalSocial,
          HowItWorksInfo,
          SingleCoolFact,
          service_single_content,
          timelineInfo,
          ServiceBlock,
          SocialListIco,
          FQAInfo,
          DocElementTitle,
          TokenText,
          TeamMember,
          PartnersData
       } from '../../data/data-containers/data-HomeDemo3.js';

import {
          HomeDemo3About1,
          HomeDemo3Solution,
          HomeDemo3VideoBg4,
          HomeDemo3ImgPhone,
          HomeDemo3RingsBg,
          HomeDemo3Allocation,
          HomeDemo3BgRoadmap
        } from '../../utils/allImgs'

import {handelTitle} from '../../utils'
import Header from "../../layouts/Header"
import Footer from '../../layouts/FooterPages'

import SecWelcomeArea from './SecWelcomeArea'
import SecVerticalSocial from './SecVerticalSocial'
import SecHowItWorks from './SecHowItWorks'
import SecTrust from './SecTrust'
import SecAboutUsClient from './SecAboutUsClient'
import SecAboutUs from './SecAboutUs'
import SecDemoVideo from './SecDemoVideo'
import SecOurServices from './SecOurServices'
import SecOurRoadmap from './SecOurRoadmap'
import SecOurFeatures from './SecOurFeatures'
import SecSubscribe from './SecSubscribe'
import SecFAQ_Timeline from './SecFAQ_Timeline'
import SecDistribution from './SecDistribution'
import SecTeam from './SecTeam'
import SecPartners from './SecPartners'

let HomeDemo3 = () => {

  useEffect(() => {
    handelTitle('Databeast AI')
  },[])

  return (
    <>
      <Header />
      <div className="HomeDemo3">
        <SecWelcomeArea />
        <SecVerticalSocial data={VerticalSocial} />
        <SecHowItWorks data={HowItWorksInfo} imgPhone={HomeDemo3ImgPhone} />
        {/* <SecTrust data={SingleCoolFact} /> */}
        {/* <SecAboutUsClient img={HomeDemo3About1} /> */}
        {/* <SecAboutUs img={HomeDemo3Solution} /> */}
        {/* <SecDemoVideo img={HomeDemo3VideoBg4} /> */}
        {/* <div className="clearfix" /> */}
        {/* <SecOurServices data={service_single_content} /> */}
        {/* <SecOurRoadmap data={timelineInfo} img={HomeDemo3BgRoadmap} /> */}
        {/* <SecOurFeatures data={ServiceBlock} imgPhone={HomeDemo3ImgPhone} Rings={HomeDemo3RingsBg} /> */}
        {/* <SecSubscribe data={SocialListIco} /> */}
        {/* <SecFAQ_Timeline FQAInfo={FQAInfo} DocElementTitle={DocElementTitle} /> */}
        {/* <SecDistribution img={HomeDemo3Allocation} data={TokenText} /> */}
        {/* <SecTeam data={TeamMember} /> */}
        {/* <SecPartners data={PartnersData} /> */}
      </div>
      <Footer />
    </>
  );
};

export default HomeDemo3