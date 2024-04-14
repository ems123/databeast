import {useEffect}  from "react";
import './style/HomeDemo1.scss'

import {
          VerticalSocial,
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
       } from '../../data/data-containers/data-HomeDemo1.js';

import {
          HomeDemo1About1,
          HomeDemo1Solution,
          HomeDemo1VideoBg4,
          HomeDemo1ImgPhone,
          HomeDemo1RingsBg,
          HomeDemo1Allocation
        } from '../../utils/allImgs'

import {handelTitle} from '../../utils'
import Header from "../../layouts/Header"
import Footer from '../../layouts/FooterPages'

import SecWelcomeArea from './SecWelcomeArea'
import SecVerticalSocial from './SecVerticalSocial'
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

let HomeDemo1 = () => {

  useEffect(() => {
    handelTitle('Home Template1')
  },[])

  useEffect(() => {
    if (document.title === 'Home Template1') {
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(180deg,#240044 0,#0f0240 25%,#400959 40%,#0f0240 65%,#0f0240)'
    }else{
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(to right, #4834d4, #341f97)'
    }
  },[])

  return (
    <>
      <Header />
      <div className="HomeDemo1">
        <SecWelcomeArea />
        <SecVerticalSocial data={VerticalSocial} />
        <SecTrust data={SingleCoolFact} />
        <SecAboutUsClient img={HomeDemo1About1} />
        <SecAboutUs img={HomeDemo1Solution} />
        <div className="clearfix" />
        <SecDemoVideo img={HomeDemo1VideoBg4} />
        <div className="clearfix" />
        <SecOurServices data={service_single_content} />
        <SecOurRoadmap data={timelineInfo} />
        <SecOurFeatures data={ServiceBlock} imgPhone={HomeDemo1ImgPhone} Rings={HomeDemo1RingsBg} />
        <SecSubscribe data={SocialListIco} />
        <SecFAQ_Timeline FQAInfo={FQAInfo} DocElementTitle={DocElementTitle} />
        <SecDistribution img={HomeDemo1Allocation} data={TokenText} />
        <SecTeam data={TeamMember} />
        <SecPartners data={PartnersData} />
      </div>
      <Footer />
    </>
  );
};

export default HomeDemo1