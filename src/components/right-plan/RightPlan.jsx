import React, { useState } from 'react'
import Switch from "react-switch";
import './rightplan.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiXCircle } from "react-icons/hi";


function RightPlan() {
    const [checked,setChecked]=useState(false);
    const handleChange=(checked)=>{
setChecked(checked)
    }
  return (
    <div className='container' id='bbvc'>
        
        <div className='rightContainer'>
            <div className='rightText'>
                <h2>
                The Right Plan for Your Business
                </h2>
                <p>
                We have several powerful plans to showcase your business and get discovered
as a creative entrepreneurs. Everything you need.
                </p>
                <div className='switchData'>
                    <p>Bill Monthly</p>
                    
                    <div className='switchbuton'>
                    <Switch
        checked={checked}
            onChange={handleChange}
            offColor="#1DA1F2"
            
            offHandleColor="#ffef00"
          
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
                    </div>
                    <p>Bill Annualy</p>

                </div>
            </div>
            <div className='planTypes'>
                <div className='basicTypes'>
                    <div className='typeContent'>
                    <div className='contenth2'>
                        <span>BASIC</span>
                    </div>
                    <p>
                    For all individuals and starters who
want to start with domaining.
                    </p>
                    <div className='typeLine'></div>
                    </div>
                    <div className='typeDate'>
                        <span>$19</span>
                        <p>Per member, per Month</p>
                        <div className='typeBottomLine'>
                            
                        </div>
                    </div>
                    <div className='typeIcon'>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Access to All Features
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            1k lookups / per month
                            </p>
                        </div> <div className='planIcons'>
                            <HiXCircle className='hexiIcon'/>
                            <p>
                            No API Credits
                            </p>
                        </div> <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            10 Monitoring Quota
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            60 minutes Monitoring intervel
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            20% discount on backorders
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Domain Name Appraisal 
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Ip Monitoring
                            </p>
                        </div>
                        


                        


                    </div>
                </div>



                <div className='professionalTypes'>
                    <div className='typeContent'>
                  <div className='pcontentT'> 
                        <span>PROFESSIONAL</span>
                    
                    </div>
                    <p>
                    For professional domain names
investors with a big portfolio.
                    </p>
                    <div className='typeLine'></div>
                    </div>
                    <div className='typeDate'>
                        <span>$49</span>
                        <p>Per member, per Month</p>
                        <div className='typeBottomLine'>
                            
                        </div>
                    </div>
                    <div className='typeIcon'>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Access to All Features
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            1k lookups / per month
                            </p>
                        </div> <div className='planIcons'>
                            <HiXCircle className='hexiIcon'/>
                            <p>
                            No API Credits
                            </p>
                        </div> <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            10 Monitoring Quota
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            60 minutes Monitoring intervel
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            20% discount on backorders
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Domain Name Appraisal 
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Ip Monitoring
                            </p>
                        </div>
                        


                        


                    </div>
                </div>
                <div className='advanceTypes'>
                    <div className='typeContent'>
                    <div className='tcontentA'>
                        <span>ADVANCED</span>
                        </div>
                    <p>
                    For professional domain names
investors with a big portfolio.
                    </p>
                    <div className='typeLine'></div>
                    </div>
                    <div className='typeDate'>
                        <span>$99</span>
                        <p>Per member, per Month</p>
                        <div className='typeBottomLine'>
                            
                        </div>
                    </div>
                    <div className='typeIcon'>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Access to All Features
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            1k lookups / per month
                            </p>
                        </div> <div className='planIcons'>
                            <HiXCircle className='hexiIcon'/>
                            <p>
                            No API Credits
                            </p>
                        </div> <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            10 Monitoring Quota
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            60 minutes Monitoring intervel
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            20% discount on backorders
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Domain Name Appraisal 
                            </p>
                        </div>
                        <div className='planIcons'>
                            <BsFillCheckCircleFill/>
                            <p>
                            Ip Monitoring
                            </p>
                        </div>
                        


                        


                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default RightPlan