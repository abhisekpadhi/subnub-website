import React from 'react';
import {Button} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {CLUBHOUSE_BG_COLOR} from './constants';
import Footer from './footer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link'
import {useRouter} from 'next/router';

function Layout(props: any) {
    const classes = useStyles();
    const router = useRouter();
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            className={'App'}
            style={{minHeight: '100vh'}}
            alignItems={'stretch'}
        >
            <Box
                display={'flex'}
                flex={0.95}
            >
                <Box className={classes.container}>
                    <AppBar position="static" style={{backgroundColor: CLUBHOUSE_BG_COLOR, boxShadow: 'none', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Toolbar>
                            <Box className={classes.title}>
                                <Button className={classes.titleBtn} onClick={() => router.push('/')}>
                                    <img
                                        src={'/static/img/sbnb-icon.jpg'}
                                        alt={'subnub on app store'}
                                        width={38}
                                        height={38}
                                        className={classes.logo}
                                    />
                                    <Box className={classes.brandName}>SubNub</Box>
                                </Button>

                            </Box>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.container}>
                        {props.children}
                    </div>
                </Box>
            </Box>
            <Box
                display={'flex'}
                flex={0.05}
                style={{backgroundColor: '#f0f6ff'}}
                justifySelf={'flex-end'}
            >
                <Footer />
            </Box>
        </Box>
    )
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
            backgroundColor: CLUBHOUSE_BG_COLOR,
            // marginTop: 20,
        },
        brandName: {
            fontFamily: 'Lexend Deca, sans-serif',
            fontSize: '1.65rem',
            fontWeight: 'bold',
            marginLeft: 10,
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

export default Layout;
