import {useEffect} from "react"
import { SlideCountdown } from 'react-fancy-countdown';
import { Line } from 'rc-progress';

const IcoCounter = () => {

  useEffect(() => {
    let PathProgs = document.querySelector('.rc-progress-line-trail')
    PathProgs.setAttribute('stroke' , "transparent")
  },[])

  return (
    <div className="ico-counter">
        <div className="counter-down">

            <div className="content">
                <div className="conuter-header">
                    <h3 className="text-center mb-30">TOKEN SALE ENDS IN</h3>
                </div>
                <div className="counterdown-content">
                    
                    <div className="count-down titled circled text-center">
                        <SlideCountdown
                          weeks={false}
                          deadline="2030-12-31 14:23:22" />
                    </div>
                    <div className="ico-progress">
                       <ul className="list-unstyled list-percent list-inline clearfix mb-10">
                          <li className="title">33m</li>
                          <li className="strength">75m</li>
                       </ul>
                       <div className="current-progress">
                          <Line percent="70" trailWidth="3" strokeWidth="4" strokeColor="#4834d4" />
                       </div>
                       <span className="pull-left">Softcap in 103 days</span>
                       <span className="pull-right">Token Hardcap</span>
                    </div>
                    <div className="text-center">
                        <a href="#" className="button mt-30">Buy More Tokens</a>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  );
}

export default IcoCounter;