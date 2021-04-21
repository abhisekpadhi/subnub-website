import React from 'react';
import {Button, Container} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {CLUBHOUSE_BG_COLOR} from '../components/constants';
import Head from 'next/head'

function Home() {
    const classes = useStyles();
    return (
        <Container>
            <Head>
                <title>SubNub: Drop-in audio chat social network</title>
                <meta name="title" content="SubNub" />
                <meta name="description" content="SubNub is a brand new social network that enables creators and audience to connect intimately and casually through audio-only chatroom conversations." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://subnub.com/" />
                <meta property="og:title" content="SubNub" />
                <meta property="og:description" content="SubNub is a brand new social network that enables creators and audience to connect intimately and casually through audio-only chatroom conversations." />
                <meta property="og:image" content="/static/img/app_screnshot.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://subnub.com" />
                <meta property="twitter:title" content="SubNub" />
                <meta property="twitter:description" content="SubNub is a brand new social network that enables creators and audience to connect intimately and casually through audio-only chatroom conversations." />
                <meta property="twitter:image" content="/static/img/app_screnshot.png" />

                <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Nunito:wght@400;600&display=swap" rel="stylesheet" />
                {process.browser && (<link rel="canonical" href={window.location.href}/>)}
            </Head>

            <Box className={classes.heroPara}>
                SubNub is a casual & moderated
                <br />
                audio chat room social network
            </Box>

            <Box className={classes.firstPara}>
                We're still opening up but anyone can join
                <br />
                with an invite from an existing user!
            </Box>

            <Box className={classes.secondPara}>
                Signup & reserve your username
                <br />
                We can't wait for you to join 🤗
            </Box>

            <Grid
                container
                direction={'row'}
                justify={'center'}
                alignItems={'center'}
                spacing={3}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>

                        <Box display={'flex'}>
                            <a target='_blank' href={'https://play.google.com/store/apps/details?id=com.subnub&hl=en_IN&gl=IN'}>
                                <Image
                                    src={'/static/img/google-play-badge.webp'}
                                    alt={'subnub on google play store'}
                                    width={256}
                                    height={102}
                                />
                            </a>
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <a target='_blank' href={'https://apps.apple.com/app/id1560234791'}>
                                <Image
                                    src={'/static/img/app-store-badge.webp'}
                                    alt={'subnub on app store'}
                                    width={220}
                                    height={76}
                                />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box className={classes.screenshotsContainer}>
                <Box>
                    <Image
                        src={'/static/img/app_screnshot.webp'}
                        alt={'subnub'}
                        layout={'responsive'}
                        width={612}
                        height={695}
                    />
                </Box>
            </Box>
        </Container>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            display: 'flex',
            flex: 1,
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            width: 38,
            height: 38,
            borderRadius: 14,
            elevation: 3,
        },
        titleBtn: {
            display: 'flex',
            // flex: 1,
            flexDirection: 'row',
            textTransform:'none',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            // height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: CLUBHOUSE_BG_COLOR,
            // marginTop: 20,
        },
        brandName: {
            fontFamily: 'Lexend Deca, sans-serif',
            fontSize: '1.65rem',
            fontWeight: 'bold',
        },
        logoContainer: {
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 1,
            flexDirection: 'column'
        },
        screenshotsContainer: {
            paddingTop: 20,
        },
        screenshot: {
            // height: 320,
            width: '100%'
        },
        secondPara: {
            padding: 15,
            fontFamily: 'Nunito, sans-serif',
            fontSize: 18,
            textAlign: 'center',
        },
        firstPara: {
            padding: 15,
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            fontSize: 22,
            textAlign: 'center',
        },
        heroPara: {
            padding: 15,
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            fontSize: 28,
            textAlign: 'center',
        }
    }),
);

export default Home;
