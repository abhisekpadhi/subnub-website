import React from "react";
import {Container} from "@material-ui/core";


function Intro(){
    return(
        <div style={{backgroundColor: '#f1f1f1'}}>
            <Container>
                <div className="intro">
                    <div className='main-text'>
                        <div className='heroPara'>
                            <div >
                                SubNub is a casual & moderated
                            </div>
                            <div>
                                audio chat room social network
                            </div>
                        </div>
                        <div className='secondPara'>
                            <div>
                                We're still opening up but anyone can join.
                            </div>
                            <div>
                                Download SubNub app now and create your profile!
                            </div>
                        </div>
                        <div className='buttons'>
                            <div className='google-play'>
                                <a href='https://play.google.com/store/apps/details?id=com.subnub&hl=en_IN&gl=IN&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                    <img className='google' alt='Get it on Google Play' src={'/website_assets/google-play-badge.webp'}/></a>
                            </div>
                            <div className='app-store'>
                                <a href="https://apps.apple.com/app/id1560234791">
                                    <img className='apple' src={'/website_assets/app-store-badge.webp'} alt="download on app store"/>
                                </a>
                            </div>
                        </div>
                        <div className="lastPara">
                            We can't wait for you to join!
                        </div>
                    </div>
                    <div className='main-image'>
                        <img className='graphic_indian' src={'/website_assets/WebsiteGraphic_Indian.jpg'} alt="intro_image"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Intro
