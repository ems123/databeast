import {useEffect}  from "react";
import './style/HomeDemo2.scss'

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
       } from '../../data/data-containers/data-HomeDemo2.js';

import {
          HomeDemo2About1,
          HomeDemo2Solution,
          HomeDemo2VideoBg4,
          HomeDemo2ImgPhone,
          HomeDemo2RingsBg,
          HomeDemo2Allocation,
          HomeDemo2BgRoadmap
        } from '../../utils/allImgs'

import {handelTitle} from '../../utils'
import Header from "../../layouts/Header"
import Footer from '../../layouts/FooterPages'

import SecWelcomeArea from './SecWelcomeArea'
import SecVerticalSocial from './SecVerticalSocial'
import SecTrust from './SecTrust'
import SecAboutUsClient from './SecAboutUsClient'
import SecDemoVideo from './SecDemoVideo'
import SecOurServices from './SecOurServices'
import SecOurRoadmap from './SecOurRoadmap'
import SecOurFeatures from './SecOurFeatures'
import SecSubscribe from './SecSubscribe'
import SecFAQ_Timeline from './SecFAQ_Timeline'
import SecDistribution from './SecDistribution'
import SecTeam from './SecTeam'
import SecPartners from './SecPartners'

let HomeDemo2 = () => {

  useEffect(() => {
    handelTitle('Home Template2')
  },[])

  useEffect(() => {
    if (document.title === 'Home Template2') {
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(to right, #1d0498, #341f97)'
    }else{
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(to right, #1d0498, #341f97)'
    }
  },[])

  return (
    <>
      <Header />
      <div className="HomeDemo2">
        <SecWelcomeArea />
        <SecVerticalSocial data={VerticalSocial} />
        <SecTrust data={SingleCoolFact} />
        <SecAboutUsClient img={HomeDemo2About1} />
        <SecDemoVideo img={HomeDemo2VideoBg4} />
        <div className="clearfix" />
        <SecOurServices data={service_single_content} />
        <SecOurRoadmap data={timelineInfo} img={HomeDemo2BgRoadmap} />
        <SecOurFeatures data={ServiceBlock} imgPhone={HomeDemo2ImgPhone} Rings={HomeDemo2RingsBg} />
        <SecSubscribe data={SocialListIco} />
        <SecFAQ_Timeline FQAInfo={FQAInfo} DocElementTitle={DocElementTitle} />
        <SecDistribution img={HomeDemo2Allocation} data={TokenText} />
        <SecTeam data={TeamMember} />
        <SecPartners data={PartnersData} />
      </div>
      <Footer />
    </>
  );
};

export default HomeDemo2