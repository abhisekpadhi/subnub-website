import React from 'react';
import {Container} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Hidden from '@material-ui/core/Hidden';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from '@material-ui/core/Box';
import dayjs from 'dayjs';
import {CLUBHOUSE_BG_COLOR} from './constants';

function Footer() {
    const classes = useStyles();
    const divider = <Box style={{height: 4, width: 4, backgroundColor: 'coral', borderRadius: 100,}} />
    return (
        <Hidden smDown>
            <footer className={`${classes.container}`}>
                <Container className={classes.footerContainer}>
                    <Box display={'flex'} flex={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} paddingY={'15px'}>
                        <Box display={'flex'} paddingY={'8px'} className={classes.footerLink}>We can't wait for you to join!</Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                            <Box display={'flex'}>
                                <a target='_blank' href={'https://play.google.com/store/apps/details?id=com.subnub&hl=en_IN&gl=IN'}>
                                    <img
                                        src={'/static/img/google-play-badge.webp'}
                                        alt={'subnub on google play store'}
                                        width={164}
                                        height={63}
                                    />
                                </a>
                            </Box>

                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <a target='_blank' href={'https://apps.apple.com/app/id1560234791'}>
                                    <img
                                        src={'/static/img/app-store-badge.webp'}
                                        alt={'subnub on app store'}
                                        width={128}
                                        height={42}
                                    />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Box display={'flex'} flexDirection={'row'} className={classes.footerLinksContainer}>

                            <Box className={classes.footerLinkContainer}>
                                <a target='_blank'
                                   href={'https://pages.subnub.com/about'}
                                   className={classes.footerLink}
                                >
                                    About us
                                </a>
                            </Box>
                            {divider}

                            <Box className={classes.footerLinkContainer}>
                                <a target='_blank'
                                   href={'https://pages.subnub.com/jobs'}
                                   className={classes.footerLink}
                                >
                                    Jobs
                                </a>
                            </Box>
                            {divider}

                            <Box className={classes.footerLinkContainer}>
                                <a target='_blank'
                                   href={'https://pages.subnub.com/blog'}
                                   className={classes.footerLink}
                                >
                                    Blog
                                </a>
                            </Box>
                            {divider}

                            <Box className={classes.footerLinkContainer}>
                                <a href={'https://pages.subnub.com/support'} className={classes.footerLink}>
                                    Contact
                                </a>
                            </Box>
                            {divider}

                            <Box className={classes.footerLinkContainer}>
                                <a href={'https://pages.subnub.com/compliance'} className={classes.footerLink}>
                                    Compliance
                                </a>
                            </Box>
                            {divider}

                            <Box className={classes.footerLinkContainer}>
                                <a href={'https://pages.subnub.com/guidelines'} target={'_blank'} className={classes.footerLink}>
                                    Guidelines
                                </a>
                            </Box>
                            {divider}

                            <Box className={classes.footerLinkContainer}>
                                <a href={'https://pages.subnub.com/privacy'} target={'_blank'} className={classes.footerLink}>
                                    Privacy
                                </a>
                            </Box>
                            {divider}

                            <Box className={classes.footerLinkContainer}>
                                <a href={'https://pages.subnub.com/terms'} target={'_blank'} className={classes.footerLink}>
                                    Terms
                                </a>
                            </Box>

                        </Box>
                    </Box>
                    <Box display={'flex'} className={classes.socialMediaIconsContainer}>
                        <a target={'_blank'} rel="noopener noreferrer" href={'https://www.facebook.com/subnub'} className={classes.footerLink}>
                            <FacebookIcon />
                        </a>
                        <a target={'_blank'} rel="noopener noreferrer" href={'https://twitter.com/subnubapp'} className={classes.footerLink}>
                            <TwitterIcon />
                        </a>
                        <a target={'_blank'} rel="noopener noreferrer" href={'https://www.instagram.com/subnubapp/'} className={classes.footerLink}>
                            <InstagramIcon />
                        </a>
                        <a target={'_blank'} rel="noopener noreferrer" href={'https://www.linkedin.com/company/subnub/'} className={classes.footerLink}>
                            <LinkedInIcon />
                        </a>
                    </Box>
                    <Box display={'flex'} className={classes.copyright}>
                        &copy; {dayjs().year()} SubNub Technologies Pvt. Ltd.
                    </Box>
                </Container>
            </footer>
        </Hidden>
    )
}

const useStyles = makeStyles({
    container: {
        width: '100%',
        maxWidth: '100%',
        margin: 0,
        color: 'black',
        borderTopWidth: 1,
        borderTopColor: 'black',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: CLUBHOUSE_BG_COLOR,
    },
    footerLinksContainer: {
        paddingLeft: '4rem',
        paddingRight: '4rem',
        alignItems: 'center',
    },
    footerLinkContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Nunito, sans-serif',
        fontSize: '16px',
        paddingLeft: 12,
    },
    footerLink: {
        fontFamily: 'Nunito, sans-serif',
        fontWeight: 'bold',
        marginRight: 15,
        textDecoration: 'none',
        paddingBottom: 5,
        color: '#414141',
    },
    socialMediaIconsContainer: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 20
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    copyright: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Lexend Deca, sans-serif',
        fontSize: '16px'
    }
})

export default Footer;
