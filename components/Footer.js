import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import dayjs from "dayjs";
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer(){
    return(
        <div className='footer'>
            <div className='buttons'>
                <div className='google-play'>
                    <a href='https://play.google.com/store/apps/details?id=com.subnub&hl=en_IN&gl=IN&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                        <img className='footer-google' alt='Get it on Google Play' src={'/website_assets/google-play-badge.webp'}/></a>
                </div>
                <div className='app-store'>
                    <a href="https://apps.apple.com/app/id1560234791">
                        <img className='footer-apple' src={'/website_assets/app-store-badge.webp'} alt="download on app store"/>
                    </a>
                </div>
            </div>
            <div className='footer-join'>
                We can't wait for you to join!
            </div>
            <div className='footer-links'>
                <div className='footer_part_1'>
                    <div className='footer-options'>
                        <a rel="noopener noreferrer" target='_blank' href={'https://pages.subnub.com/about'}>
                            About us
                        </a>
                        <div className='divider'>
                            |
                        </div>
                    </div>
                    <div className='footer-options'>
                        <a rel="noopener noreferrer" target='_blank' href="https://pages.subnub.com/jobs">
                            Jobs
                        </a>
                        <div className='divider'>
                            |
                        </div>
                    </div>
                    <div className='footer-options'>
                        <a rel="noopener noreferrer" target='_blank' href="https://pages.subnub.com/blog">
                            Blog
                        </a>
                        <div className='divider'>
                            |
                        </div>
                    </div>
                    <div className='footer-options'>
                        <a rel="noopener noreferrer" target='_blank' href="https://pages.subnub.com/support">
                            Contact
                        </a>
                        <div className='divider'>
                            <div className='contact-divider'>
                                |
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_part_2'>
                    <div className='footer-options'>
                        <a rel="noopener noreferrer" target='_blank' href="https://pages.subnub.com/compliance">
                            Compliance
                        </a>
                        <div className='divider'>
                            |
                        </div>
                    </div>
                    <div className='footer-options'>
                        <a rel="noopener noreferrer" target='_blank' href="https://pages.subnub.com/guidelines">
                            Guidelines
                        </a>
                        <div className='divider'>
                            |
                        </div>
                    </div>
                    <div className='footer-options'>
                        <a rel="noopener noreferrer" target='_blank' href="https://pages.subnub.com/privacy">
                            Privacy
                        </a>
                        <div className='divider'>
                            |
                        </div>
                    </div>
                    <div className='footer-options'>
                        <a rel="noopener noreferrer" target='_blank' href="https://pages.subnub.com/terms">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
            <div className='social-icons'>
                <div className='icon'>
                    <a className='social-link' rel="noopener noreferrer" target={"_blank"} href="https://www.facebook.com/subnub">
                        <FacebookIcon textDecoration='none'/>
                    </a>
                </div>
                <div className='icon'>
                    <a className='social-link' rel="noopener noreferrer" target={"_blank"} href="https://twitter.com/subnubapp">
                        <TwitterIcon />
                    </a>
                </div>
                <div className='icon'>
                    <a className='social-link' rel="noopener noreferrer" target={"_blank"} href="https://www.instagram.com/subnubapp/">
                        <InstagramIcon />
                    </a>
                </div>
                <div className='icon'>
                    <a className='social-link' rel="noopener noreferrer" target={"_blank"} href="https://www.linkedin.com/company/subnub/">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
            <div className='copyright'>
                <div className='copy'>
                    &copy;
                </div>
                <div className='sbnb-tech'>
                    {dayjs().year()} SubNub Technologies Pvt. Ltd.
                </div>
            </div>
        </div>
    )
}

export default Footer


